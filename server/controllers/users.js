const User = require('../models/users')
const Message = require("../models/messages")
const bcrypt = require('bcryptjs');
const {uniqueUsers} = require("../../src/utils");

module.exports = {
    addUser: async (req, res) => {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
            friends: []
        }).then(user => res.status(200).json(user))
    },

    addFriendToUser: async (req, res) => {
        try {
            let friend = await User.findOne({username: req.body.newFriend})
            await User.findOneAndUpdate(
                {username: req.body.username},
                {$push: {friends: friend._id}}
            );
            res.status(200).json(friend)
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
            res.status(200).json(update)
        } catch (err) {
            res.send(`<h1>${err}</h1>`)
        }
    },

    getFriendsByUsername: (req, res) => {
        User.findOne({username: req.params.username})
            .then(user => {
                let usersPromises = user.friends.map(friendId => User.findOne({_id: friendId}))
                Promise.all(usersPromises).then(users => {
                    res.status(200).json(users)
                })
            })
    },

    validateLogin: async (req, res) => {
        const user = await User.findOne({username: req.body.username})

        if (!user) {
            return res.status(404).json({error: 'Utente non trovato'});
        } else {
            const isPasswordValid = await bcrypt.compare(req.body.password, user.password);

            if (!isPasswordValid) {
                return res.status(401).json({error: 'Password non valida'});
            }
            res.status(200).json({message: 'Accesso effettuato con successo'})
        }
    },

    getChatsByUsername: (req, res) => {
        try {
            User.findOne({username: req.params.username})
                .then(loggedUser => {
                    Message.find({$or: [{author: loggedUser._id}, {receiver: loggedUser._id}]})
                        .then(messages => {
                            let usersPromises = messages.map(message =>
                                message.author.equals(loggedUser._id) ? User.findOne({_id: message.receiver})
                                    : User.findOne({_id: message.author})
                            )
                            Promise.all(usersPromises).then(users => {
                                const chats = users.map((user, idx) => {
                                    return {user: user, message: messages[idx]}
                                })
                                res.status(200).json(chats)
                            })
                        })
                })
        } catch (error) {
            res.send(`<h1>${error}</h1>`)
        }
    }
}