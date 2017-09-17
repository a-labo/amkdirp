/**
 * Asynchroms mkdirp
 * @module amkdirp
 * @version 2.0.0
 */

'use strict'

const amkdirp = require('./amkdirp')

let lib = amkdirp.bind(this)

Object.assign(lib, amkdirp, {
  amkdirp
})

module.exports = lib
