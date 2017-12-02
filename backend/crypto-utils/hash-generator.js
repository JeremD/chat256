'use strict'

const forge = require('node-forge')

const generateStaticHash = () => {
  const messageDigest = forge.md.md5.create()
  messageDigest.update('hello chat 256')

  return messageDigest.digest().toHex()
}

module.exports = { generateStaticHash }
