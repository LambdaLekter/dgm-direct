const express = require('express')
const messagesRouter = require('./messages')
const usersRouter = require('./users')

const router = express.Router()

router.use('/messages', messagesRouter)
router.use('/users', usersRouter)

module.exports = router