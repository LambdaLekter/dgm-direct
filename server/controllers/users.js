const User = require('../models/users')
const Message = require("../models/messages")
const bcrypt = require('bcryptjs');

module.exports = {
    /* * Funzioni per l'aggiunta di un nuovo utente al DB (addUser), ovvero al termine della procedura di registrazione,
    *    e per la validazione del login (validateLogin), utilizzando la libreria "bcrypt" e implementando una funzione
    *    di hashing della password memorizzata, ai fini della autenticazione sicura
    * */
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

    validateLogin: async (req, res) => {
        const user = await User.findOne({ username: req.body.username })

        if (!user) {
            return res.status(404).json({ error: 'Utente non trovato' })
        } else {
            const valid = await bcrypt.compare(req.body.password, user.password)
            if (!valid) res.status(401).json({ error: 'Password non valida' })
            else res.status(200).json({message: 'Accesso effettuato con successo'})
        }
    },


    /* *  Insieme di metodi utilizzati per la gestione dell'utente e degli amici:
    *      - addFriendToUser: aggiunta amico all'array friends dell'utente loggato
    *      - removeFriendFromUser: rimozione amico all'array friends dell'utente loggato
    *      - getFriendsByUsername: usato per la visualizzazione delle amicizie relative all'utente loggato
    *      - getChatsByUsername: restituisce le chat relative all'utente loggato, che sia mittente o destinatario
    * */
    addFriendToUser: async (req, res) => {
        try {
            let user = await User.findOne({ username: req.body.username })
            let friend = await User.findOne({ username: req.body.newFriend })

            // eseguiamo l'aggiunta solo se l'utente esiste e non è già un amico
            if (friend) {
                if (user.friends.includes(friend._id) || friend._id === user._id) {
                    res.status(409).send() // Conflict: l'utente è già un amico, o è l'utente autenticato
                } else {
                    await User.findOneAndUpdate(
                        {username: req.body.username},
                        {$push: {friends: friend._id}}
                    )
                    res.status(200).json(friend) // Ok: aggiunta dell'utente agli amici
                }
            } else {
                res.status(404).send() // Not Found: l'utente non esiste
            }
        } catch (err) {
            res.send(`<h1>${err}</h1>`)
        }
    },

    removeFriendFromUser: async (req, res) => {
        try {
            let friend = await User.findOne({username: req.body.friend})
            await User.findOneAndUpdate(
                {username: req.body.username},
                {$pull: {friends: friend._id}}
            )
            res.status(200).json(friend)
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
    },

    getNotFriendsByUsername: async (req, res) => {
        const user = await User.findOne({username: req.params.username})
        const users = await User.find({$and: [{_id: {$ne: user._id}}, {_id: {$nin: user.friends}}]})
        res.status(200).json(users)
    }
}