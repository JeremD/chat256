'use strict'

const HASH_METHODS = {
  MD5: 'md5',
  SHA1: 'sha1',
  SHA256: 'sha256'
}

const forge = require('node-forge')

const generateDummyHash = () => {
  const messageDigest = forge.md.md5.create()
  messageDigest.update('hello chat 256')

  return messageDigest.digest().toHex()
}

const generateCustomHash = (data, algorithm, iterations) => {
  let messageDigest
  const hashMethod = forge.md[HASH_METHODS[algorithm]]
  messageDigest = hashMethod.create()
  messageDigest.update(data)
  messageDigest = messageDigest.digest().toHex()

  for (let i = 1; i < iterations - 1; i++) {
    let tempMessage = hashMethod.create()
    tempMessage.update(messageDigest)

    messageDigest = tempMessage.digest().toHex()
  }

  return messageDigest
}

module.exports = { generateDummyHash, generateCustomHash }
