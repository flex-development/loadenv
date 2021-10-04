/**
 * @file Interfaces - LoadEnvOptions
 * @module loadenv/interfaces/LoadEnvOptions
 */

/**
 * Environment loading options.
 */
interface LoadEnvOptions {
  /**
   * Enable environment variable cascading. To pick multiple environment files,
   * pass a delimited, priority-ordered list.
   *
   * @example
   *  load({ cascade: 'production' })
   *  // `.env.production.local`,`.env.production`,`.env.local`,`.env`
   * @example
   *  load({ cascade: 'staging,test' })
   *  // `.env.staging`,`.env.test`,`.env.local`,`.env`
   *
   * @default undefined
   */
  cascade?: string

  /**
   * Load a set of default environment variables.
   *
   * If `true`, `.env.defaults` will be loaded. Pass a string value to choose a
   * different defaults file.
   *
   * @example load({ defaults: true })
   * @example load({ defaults: 'config/.env.defaults' })
   *
   * @default false
   */
  defaults?: boolean | string

  /**
   * Name of environment file(s) to load. To load multiple environment files,
   * pass a delimited, priority-ordered list.
   *
   * @default '.env'
   */
  env?: string

  /**
   * Update GitHub Actions environment after variables are parsed and expanded.
   *
   * Has no effect if `process.env.$GITHUB_ENV` is unset or otherwise falsy.
   *
   * @default false
   */
  github?: boolean

  /**
   * Override existing environment variables.
   *
   * If `true`, `env` or files indicated by `cascade` will be used to override
   * variables. Pass a string value to set an override file. To cascade override
   * files, pass a delimited, priority-ordered list.
   *
   * @see https://github.com/motdotla/dotenv#what-happens-to-environment-variables-that-were-already-set
   *
   * @default false
   */
  override?: boolean | string

  /**
   * Name of environment variable(s) to print. To print multiple variables, pass
   * a delimited, priority-ordered list of names (case-sensitive).
   *
   * If `print.includes('result')`, a `LoadEnvResult` object will be logged.
   *
   * @default undefined
   */
  print?: string

  /**
   * Current working directory.
   *
   * @default process.cwd()
   */
  root?: string

  /**
   * Delimiter used in lists.
   *
   * @default ','
   */
  splitter?: string

  /**
   * Enable [`dotenv` logs][1].
   *
   * [1]: https://github.com/motdotla/dotenv#debug
   *
   * @default false
   */
  verbose?: boolean
}

export default LoadEnvOptions
