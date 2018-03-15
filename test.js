const test = require('tape')
const lib = require('@posva/test-pr-lib')

test('timing test', t => {
  t.plan(1)

  t.equal(lib('Ed'), 'Hello Ed!')
})
