import log from '@flex-development/log'
import LogLevel from '@flex-development/log/enums/log-level.enum'
import type { LogOptions } from '@flex-development/log/interfaces'
import type { Level } from '@flex-development/log/types'
import type { LoadEnvOptions } from '@loadenv/interfaces'
import type { TestcaseCalled } from '@tests/utils/types'
import type { RestoreConsole } from 'jest-mock-console'
import mockConsole from 'jest-mock-console'
import testSubject from '../logger.util'

/**
 * @file Functional Tests - logger
 * @module loadenv/utils/tests/functional/logger
 */

const mockLog = log as jest.MockedFunction<typeof log>

describe('functional:utils/logger', () => {
  const restoreConsole: RestoreConsole = mockConsole()

  const args: any[] = ['some', 'data', '!']

  afterAll(() => {
    restoreConsole()
  })

  it('should call @flex-development/log', () => {
    // Arrange
    const options: LoadEnvOptions = { verbose: true }

    const level: Level = LogLevel.DEBUG
    const message: string = `${level} message`

    // Act
    testSubject(options, message, args, level)

    // Expect
    expect(mockLog).toBeCalledTimes(1)
    expect(mockLog).toBeCalledWith(message, {
      args,
      bold: { args: true, data: true },
      color: { data: 'white' },
      level,
      silent: !options.verbose
    })
  })

  describe('level', () => {
    describe('log data color', () => {
      type Case = Omit<TestcaseCalled, 'call' | 'expected'> & {
        color: LogOptions['color']
        level: Level
        should: 'should' | 'should not'
      }

      const cases: Case[] = [
        { color: { data: 'white' }, level: LogLevel.DEBUG, should: 'should' },
        { color: {}, level: LogLevel.INFO, should: 'should not' }
      ]

      const name = "$should override log data color if level === '$level'"

      it.each<Case>(cases)(name, testcase => {
        // Arrange
        const { color, level } = testcase

        // Act
        testSubject({}, 'message', args, level)

        // Expect
        expect(mockLog.mock.calls[0][1]).toMatchObject({ color, level })
      })
    })
  })
})
