const express = require('express')
const usersController = require('../controllers/users')

const router = express.Router()

router.get('/', (req, res) => {
    res.send("<h1>DGM Direct API Utenti. Accesso negato</h1>")
})

router.post('/addUser', usersController.addUser)
router.post('/addFriend', usersController.addFriendToUser)
router.post('/removeFriend', usersController.removeFriendFromUser)
router.post('/getFriends/:username', usersController.getFriendsByUsername)
router.post('/getNotFriends/:username', usersController.getNotFriendsByUsername)
router.post('/login', usersController.validateLogin)
router.post('/getChats/:username', usersController.getChatsByUsername)

module.exports = router