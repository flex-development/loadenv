/**
 * @file Type Definitions - LoadEnvDefaults
 * @module loadenv/types/LoadEnvDefaults
 */

/**
 * `loadenv` default options type.
 * 
 * @template T - Environment variable names
 */
type LoadEnvDefaults = {
  /** {@link LoadEnvOptions.cascade} */
  cascade: undefined

  /** {@link LoadEnvOptions.defaults} */
  defaults: false

  /** {@link LoadEnvOptions.env} */
  env: '.env'

  /** {@link LoadEnvOptions.github} */
  github: false

  /** {@link LoadEnvOptions.override} */
  override: false

  /** {@link LoadEnvOptions.print} */
  print: undefined

  /** {@link LoadEnvOptions.root} */
  root: ReturnType<typeof process['cwd']>

  /** {@link LoadEnvOptions.splitter} */
  splitter: ','

  /** {@link LoadEnvOptions.verbose} */
  verbose: false
}

export default LoadEnvDefaults
