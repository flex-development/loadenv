/**
 * @file Type Definitions - EnvObject
 * @module loadenv/types/EnvObject
 */

/**
 * Object containing application environment variables.
 * 
 * @template T - Environment variable names
 */
type EnvObject<T extends string = string> = Record<T, string>

export default EnvObject
