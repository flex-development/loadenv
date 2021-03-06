import fs from 'fs-extra'
import path from 'path'
import replace from 'replace-in-file'
import { getFormat as getFormatTs, resolve as resolveTs } from 'ts-node/esm'
import { createMatchPath, loadConfig } from 'tsconfig-paths'
import useDualExports from '../helpers/use-dual-exports'

/**
 * @file Helpers - Custom ESM Loader
 * @module tools/loaders/esm
 * @see https://github.com/TypeStrong/ts-node/issues/1007
 */

/** @typedef {'builtin'|'commonjs'|'dynamic'|'json'|'module'|'wasm'} Format */

// ! Add ESM-compatible export statement to `exports.default` statements
// ! Fixes: `TypeError: logger is not a function`
useDualExports([`${process.env.NODE_MODULES}/@flex-development/grease/cjs/**`])

// ! Patches `Error: Cannot find module '../loaders/env.cjs'`
;(() => {
  const PACKAGE = `${process.env.NODE_MODULES}/@flex-development/log`
  const PACKAGE_JSON = `${PACKAGE}/package.json`

  if (fs.existsSync(PACKAGE_JSON)) {
    fs.removeSync(`${PACKAGE}/tools`)

    replace.sync({
      files: PACKAGE_JSON,
      from: '"loadenv": "./tools/cli/loadenv.cjs"',
      to: ''
    })

    replace.sync({
      files: 'yarn.lock',
      from: 'loadenv: tools/cli/loadenv.cjs',
      to: ''
    })
  }
})()

/**
 * ESM requires all imported files to have extensions. Unfortunately, most `bin`
 * scripts do **not** include extensions.
 *
 * This custom hook provides support for extensionless files by assuming they're
 * all `commonjs` modules.
 *
 * @see https://github.com/nodejs/node/pull/31415
 * @see https://github.com/nodejs/modules/issues/488#issuecomment-589274887
 * @see https://github.com/nodejs/modules/issues/488#issuecomment-804895142
 *
 * @async
 * @param {string} url - File URL
 * @param {{}} ctx - Resolver context
 * @param {typeof getFormatTs} defaultGetFormat - Default format function
 * @return {Promise<{ format: Format }>} Promise containing module format
 */
export const getFormat = async (url, ctx, defaultGetFormat) => {
  // Get file extension
  const ext = path.extname(url)

  // Support extensionless files in `bin` scripts
  if (/^file:\/\/\/.*\/bin\//.test(url) && !ext) return { format: 'commonjs' }

  // Load TypeScript files as ESM
  // See `tsconfig.json#ts-node.moduleTypes` for file-specific overrides
  if (ext === '.ts') return { format: 'module' }

  // Use default format module for all other files
  return defaultGetFormat(url, ctx, defaultGetFormat)
}

/**
 * Custom resolver that handles TypeScript path mappings.
 *
 * @see https://github.com/TypeStrong/ts-node/discussions/1450
 * @see https://github.com/dividab/tsconfig-paths
 *
 * @async
 * @param {string} specifier - Name of file to resolve
 * @param {{ parentURL: string }} ctx - Resolver context
 * @param {typeof resolveTs} defaultResolve - Default resolver function
 * @return {Promise<{ url: string }>} Promise containing object with file path
 */
export const resolve = async (specifier, ctx, defaultResolve) => {
  // Get base URL and path aliases
  const { absoluteBaseUrl, paths } = loadConfig(process.cwd())

  // Attempt to resolve path based on path aliases
  const match = createMatchPath(absoluteBaseUrl, paths)(specifier)

  // Update specifier if match was found
  if (match) {
    try {
      const directory = fs.lstatSync(match).isDirectory()
      specifier = `${match}${directory ? '/index.js' : '.js'}`
    } catch {
      specifier = `${match}.js`
    }
  }

  return resolveTs(specifier, ctx, defaultResolve)
}

export { transformSource } from 'ts-node/esm'
