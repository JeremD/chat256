'use strict'

const express = require('express')
const hashGenerator = require('../crypto-utils/hash-generator')

const router = express.Router()

/* Get static hash. */
router.get('/', (req, res, next) => res.json({ hash: hashGenerator.generateDummyHash() }))

module.exports = router
