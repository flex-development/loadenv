import DEFAULTS from '@loadenv/config/defaults.config'

/**
 * @file Utilities - toArray
 * @module loadenv/utils/toArray
 */

/**
 * Converts `list` into an array.
 *
 * @param {string} [list=''] - List to convert
 * @param {string} [splitter=DEFAULTS.splitter] - List separator
 * @return {string[]} `list` as array
 */
const toArray = (
  list: string = '',
  splitter: string = DEFAULTS.splitter
): string[] => {
  // Trim list
  list = list.trim()

  // Return empty array if list is empty
  if (!list) return []

  // Split string using splitter to recreate list as array
  return list.split(splitter).map(item => item.trim())
}

export default toArray
