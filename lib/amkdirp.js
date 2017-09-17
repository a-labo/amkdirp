/**
 * mkdir -p with async function
 * @function amkdirp
 * @param {string|string[]} dirname - Directory name(s) to generate
 * @param {Object} [optoins={}] - Optional settings
 */
'use strict'

const mkdirp = require('mkdirp')

/** @lends amkdirp */
async function amkdirp (dirname, options = {}) {
  for (const d of [].concat(dirname)) {
    await new Promise((resolve, reject) =>
      mkdirp(d, options, (err) =>
        err ? reject(err) : resolve()
      )
    )
  }
}

module.exports = amkdirp
