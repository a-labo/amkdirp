/**
 * Test case for amkdirp.
 * Runs with mocha.
 */
'use strict'

const amkdirp = require('../lib/amkdirp.js')
const assert = require('assert')

describe('amkdirp', function () {
  this.timeout(3000)

  before(async () => {

  })

  after(async () => {

  })

  it('Amkdirp', async () => {
    let dirname = `${__dirname}/../tmp/foo/bar/baz`
    await amkdirp(dirname)
  })
})

/* global describe, before, after, it */
