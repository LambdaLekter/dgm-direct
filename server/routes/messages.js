const express = require('express')
const messagesController = require('../controllers/messages')

const router = express.Router()

router.get('/', (req, res) => {
    res.send("<h1>DGM Direct API. Accesso negato</h1>")
})

router.post('/:author/:receiver', messagesController.getMessagesByUsersIds)
router.post('/addMessage', messagesController.addMessage)

module.exports = router