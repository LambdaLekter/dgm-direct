const express = require('express')
const messagesController = require('../controllers/messages')

const router = express.Router()

router.get('/', (req, res) => {
    res.send("<h1>DGM Direct API Messaggi. Accesso negato</h1>")
})

router.post('/:user1/:user2', messagesController.getMessagesByUsernames)
router.post('/addMessage', messagesController.addMessage)

module.exports = router