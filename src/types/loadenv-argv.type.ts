import type { LoadEnvOptionsCLI } from '@loadenv/interfaces'
import type { Argv } from 'yargs'

/**
 * @file Type Definitions - LoadEnvArgv
 * @module loadenv/types/LoadEnvArgv
 */

/**
 * `loadenv` command line arguments parser.
 */
type LoadEnvArgv = Argv<LoadEnvOptionsCLI>

export default LoadEnvArgv