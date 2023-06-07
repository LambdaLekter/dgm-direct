const Message = require('../models/messages')

module.exports = {
    getMessagesByUsersIds: (req, res) => {
        Message.find({author: req.params.author, receiver: req.params.receiver})
            .then(r => res.json(r))
    },

    addMessage: (req, res) => {
        Message.create({
            author: req.body.author,
            receiver: req.body.receiver,
            text: req.body.text,
            time: req.body.time
        }).then( r => console.log(`Messaggio inserito: ${r}`) )
    }
}