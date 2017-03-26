'use strict'

const amkdirp = require('amkdirp')

async function tryExample () {
  await amkdirp('tmp/foo/bar')
}

tryExample()
