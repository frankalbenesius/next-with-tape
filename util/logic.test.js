import test from 'tape'

import { add10 } from './logic'

test('add10 output value', assert => {
  const actual = add10(1)
  const expected = 11

  assert.equal(actual, expected, 'add10(1) should return 11')

  assert.end()
})
