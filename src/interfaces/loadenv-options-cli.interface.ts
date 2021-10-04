import type LoadEnvOptions from './loadenv-options.interface'

/**
 * @file Interfaces - LoadEnvOptionsCLI
 * @module loadenv/interfaces/LoadEnvOptionsCLI
 */

/**
 * `loadenv` command line options.
 *
 * @extends {LoadEnvOptions}
 */
interface LoadEnvOptionsCLI extends LoadEnvOptions {
  /** {@link LoadEnvOptions.cascade} */
  c?: LoadEnvOptions['cascade']

  /** {@link LoadEnvOptions.defaults} */
  d?: LoadEnvOptions['defaults']

  /** {@link LoadEnvOptions.env} */
  e?: LoadEnvOptions['env']

  /** {@link LoadEnvOptions.github} */
  g?: LoadEnvOptions['github']

  /** {@link LoadEnvOptions.override} */
  o?: LoadEnvOptions['override']

  /** {@link LoadEnvOptions.print} */
  p?: LoadEnvOptions['print']

  /** {@link LoadEnvOptions.root} */
  r?: LoadEnvOptions['root']

  /** {@link LoadEnvOptions.verbose} */
  v?: LoadEnvOptions['verbose']
}

export default LoadEnvOptionsCLI
