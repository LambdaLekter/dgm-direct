const User = require('../models/users')

module.exports = {
    getUserByUsername: (req, res) => {
        User.findOne({username: req.params.username})
            .then(r => res.json(r))
    },

    addUser: (req, res) => {
        console.log("[DEBUG] Adding user")
        User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            friends: []
        }).then(r => res.json(r))
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
    },

    getFriendsByUsername: async (req, res) => {
        let user = await User.findOne({username: req.params.username})
        let friendUsers = user.friends.map(friendId => {
            let friendUser = null
            User.findOne({_id: friendId})
                .then(user => friendUser = user)
            return friendUser
        })
        console.log(friendUsers.toString())
        res.json(friendUsers)
    }
}