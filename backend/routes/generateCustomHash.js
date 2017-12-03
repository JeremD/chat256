'use strict'

const express = require('express')
const hashGenerator = require('../crypto-utils/hash-generator')

const router = express.Router()

/* POST to generate custom hash. */
router.post('/', (req, res, next) => {
  const hash = hashGenerator.generateCustomHash(
    req.body.data,
    req.body.algorithm,
    req.body.iterations
  )
  return res.json({ hash })
})

module.exports = router
