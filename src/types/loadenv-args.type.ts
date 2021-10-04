import type LoadEnvArgv from './loadenv-argv.type'

/**
 * @file Type Definitions - LoadEnvArgs
 * @module loadenv/types/LoadEnvArgs
 */

/**
 * `loadenv` command line arguments as plain object.
 * 
 * Arguments without a corresponding flag show up in the `_` array. The script
 * name or node command is available at `$0`.
 */
type LoadEnvArgs = LoadEnvArgv['argv']

export default LoadEnvArgs