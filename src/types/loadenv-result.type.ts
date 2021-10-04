import type EnvObject from './env-object.type'

/**
 * @file Type Definitons - LoadEnvResult
 * @module loadenv/types/LoadEnvResult
 */

/**
 * Object containing the directory environment files were loaded from, a record
 * of processed environment variables, and array of loaded environment files.
 *
 * @template T - Environment variable names
 */
type LoadEnvResult<T extends string = string> = {
  /**
   * Directory environment files were loaded from.
   */
  cwd: string

  /**
   * Object containing all parsed and expanded environment variables.
   */
  env: EnvObject<T>

  /**
   * Loaded environment files. All paths are relative to `cwd`.
   */
  loaded: string[]
}

export default LoadEnvResult
