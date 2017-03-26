/**
 * Test case for amkdirp.
 * Runs with mocha.
 */
'use strict'

const amkdirp = require('../lib/amkdirp.js')
const assert = require('assert')
const co = require('co')

describe('amkdirp', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Amkdirp', () => co(function * () {
    let dirname = `${__dirname}/../tmp/foo/bar/baz`
    yield amkdirp(dirname)
  }))
})

/* global describe, before, after, it */
