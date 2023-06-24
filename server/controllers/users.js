const User = require('../models/users')

module.exports = {
    getUserByUsername: (req, res) => {
        User.findOne({username: req.params.username})
            .then(r => res.json(r))
    },

    addUser: async (req, res) => {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);

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
            let friend = await User.findOne({username: req.body.newFriend})
            let update = await User.findOneAndUpdate(
                {username: req.body.username},
                {$push: {friends: friend._id}}
            )
            res.json(update)
        } catch (err) {
            res.send(`<h1>${err}</h1>`)
        }
    },

    removeFriendFromUser: async (req, res) => {
        try {
            let friend = await User.findOne({username: req.body.friend})
            let update = await User.findOneAndUpdate(
                {username: req.body.username},
                {$pull: {friends: friend._id}}
            )
            res.json(update)
        } catch (err) {
            res.send(`<h1>${err}</h1>`)
        }
    },

    getFriendsByUsername: (req, res) => {
        User.findOne({username: req.params.username})
            .then(user => {
                let usersPromises = user.friends.map(friendId => User.findOne({_id: friendId}))
                Promise.all(usersPromises).then(users => {
                    res.json(users)
                })
            })
    },

    validateLogin: async (req, res) => {
        const user = await User.findOne({username: req.body.username})

        if (!user) {
            return res.status(404).json({ error: 'Utente non trovato' });
        } else {
            const isPasswordValid = await bcrypt.compare(req.body.password, user.password);

            if (!isPasswordValid) {
                return res.status(401).json({error: 'Password non valida'});
            }

            res.status(200).json({message: 'Accesso effettuato con successo'})
        }
    }
}