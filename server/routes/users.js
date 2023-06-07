const express = require('express')
const usersController = require('../controllers/users')

const router = express.Router()

router.get('/', (req, res) => {
    res.send("<h1>DGM Direct API. Accesso negato</h1>")
})

router.post('/addUser', usersController.addUser)
router.post('/addFriend', usersController.addFriendToUser)
router.post('/:username', usersController.getUserByUsername)

module.exports = router