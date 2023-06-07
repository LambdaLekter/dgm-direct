const User = require('../models/users')

module.exports = {
    /**
     * Struttura della richiesta:
     * url: <host>/users/:username
     * body: null
     */
    getUserByUsername: (req, res) => {
        User.findOne({username: req.params.username})
            .then(r => res.json(r))
    },

    /**
     * Struttura della richiesta:
     * url: <host>/users/addUser
     * body: { "username": "...", "password": "...", "firstName": "...", "lastName": "..." }
     */
    addUser: (req, res) => {
        User.create({
            username: req.body.username,
            password: req.body.password,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            friends: []
        }).then(r => res.json(r))
    },

    /**
     * Struttura della richiesta:
     * url: <host>/users/addFriend
     * body: { "username": "...", "newFriend": "..." }
     */
    addFriendToUser: async (req, res) => {
        let user = await User.findOne({username: req.body.username})
        let friend = await User.findOne({username: req.body.newFriend})
        await User.updateOne(
            {_id: user._id},
            {$push: {friends: friend._id}}
        )
        res.json("")
    }
}