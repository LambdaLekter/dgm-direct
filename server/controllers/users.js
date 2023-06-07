const User = require('../models/users')

module.exports = {
    getUserByUsername: (req, res) => {
        User.findOne({username: req.params.username})
            .then(r => res.json(r))
    },

    addUser: (req, res) => {
        User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            friends: []
        }).then(r => res.json(r))
    },

    validateLogin:  (req, res) => {

    },

    addFriendToUser: async (req, res) => {
        try {
            let user = await User.findOne({username: req.body.username})
            let friend = await User.findOne({username: req.body.newFriend})
            let update = await User.updateOne(
                {_id: user._id},
                {$push: {friends: friend._id}}
            )
            res.json(update)
        } catch (err) {
            res.send(`<h1>${err}</h1>`)
        }
    }
}