import log from '@flex-development/log'
import LogLevel from '@flex-development/log/enums/log-level.enum'
import { Level } from '@flex-development/log/types'
import { ObjectPlain } from '@flex-development/tutils'
import { LoadEnvOptions } from '@loadenv/interfaces'

/**
 * @file Utilities - logger
 * @module loadenv/utils/logger
 */

/**
 * Application logger.
 *
 * @param {LoadEnvOptions | ObjectPlain} options - Application options
 * @param {string} message - Log message
 * @param {any[]} [args=[]] - Additional log arguments
 * @param {Level} [level=LogLevel.DEBUG] - Log level
 * @return {ReturnType<typeof log>} Formatted log message
 */
const logger = (
  options: LoadEnvOptions | ObjectPlain,
  message: string,
  args: any[] = [],
  level: Level = LogLevel.DEBUG
): ReturnType<typeof log> => {
  return log(message, {
    args,
    bold: { args: true, data: true },
    color: {
      data: level.toLowerCase() === LogLevel.DEBUG ? 'white' : undefined
    },
    level,
    silent: !options.verbose
  })
}

export default logger
