import DEFAULTS from '@loadenv/config/defaults.config'
import type { Testcase } from '@tests/utils/types'
import testSubject from '../to-array.util'

/**
 * @file Unit Tests - toArray
 * @module loadenv/utils/tests/unit/toArray
 */

describe('unit:utils/toArray', () => {
  type Case = Testcase<string[]> & {
    list: string | undefined
    splitter?: string
    state: string
  }

  const cases: Case[] = [
    { expected: [], list: undefined, state: 'is undefined' },
    { expected: [], list: '', state: 'is empty string (trimmed)' },
    { expected: [], list: '  ', state: 'is empty string (untrimmed)' },
    {
      expected: [DEFAULTS.env],
      list: DEFAULTS.env,
      state: 'has one item'
    },
    {
      expected: ['test', 'development'],
      list: 'test|development',
      splitter: '|',
      state: 'has multiple items (trimmed)'
    },
    {
      expected: ['production', 'staging'],
      list: 'production ; staging',
      splitter: ';',
      state: 'has multiple items (untrimmed)'
    }
  ]

  it.each<Case>(cases)('should return $expected if list $state', testcase => {
    // Arrange
    const { expected, splitter, list } = testcase

    // Act + Expect
    expect(testSubject(list, splitter)).toIncludeSameMembers(expected)
  })
})
