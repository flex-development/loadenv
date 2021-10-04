import type { LoadEnvDefaults } from '@loadenv/types'

/**
 * @file Configuration - Default Options
 * @module loadenv/config/defaults
 */

export default {
  cascade: undefined,
  defaults: false,
  env: '.env',
  github: false,
  override: false,
  print: undefined,
  root: process.cwd(),
  verbose: false
} as LoadEnvDefaults
