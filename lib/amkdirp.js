/**
 * mkdir -p with async function
 * @function amkdirp
 * @param {string|string[]} dirname - Directory name(s) to generate
 * @param {Object} [optoins={}] - Optional settings
 */
'use strict'

const mkdirp = require('mkdirp')
const co = require('co')

/** @lends amkdirp */
function amkdirp (dirname, options = {}) {
  return co(function * () {
    for (let d of [].concat(dirname)) {
      yield new Promise((resolve, reject) =>
        mkdirp(d, options, (err) =>
          err ? reject(err) : resolve()
        )
      )
    }
  })
}

module.exports = amkdirp
