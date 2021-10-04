import type { LoadEnvDefaults } from '@loadenv/types'

/**
 * @file Configuration - Default Options
 * @module loadenv/config/defaults
 */

const DEFAULTS: LoadEnvDefaults = {
  cascade: undefined,
  defaults: false,
  env: '.env',
  github: false,
  override: false,
  print: undefined,
  root: process.cwd(),
  splitter: ',',
  verbose: false
}

export default DEFAULTS
