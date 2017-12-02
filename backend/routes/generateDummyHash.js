'use strict'

const express = require('express')
const hashGenerator = require('../crypto-utils/hash-generator')

const router = express.Router()

/* GET users listing. */
router.get('/', (req, res, next) => res.json({ hash: hashGenerator.generateStaticHash() }))

module.exports = router
