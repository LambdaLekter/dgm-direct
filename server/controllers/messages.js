const Message = require('../models/messages')
const User = require('../models/users')

module.exports = {
    getMessagesByUsernames: async (req, res) => {
        try {
            let user1 = await User.findOne({username: req.params.user1})
            let user2 = await User.findOne({username: req.params.user2})
            let messages = await Message.find({
                $or: [
                    {author: user1._id, receiver: user2._id},
                    {author: user2._id, receiver: user1._id}
                ]
            })
            messages = messages.map(message => {
                return {
                    _id: message._id,
                    author: user1._id.equals(message.author) ? user1.username : user2.username,
                    receiver: user1._id.equals(message.receiver) ? user1.username : user2.username,
                    text: message.text,
                    time: message.time
                }
            })
            res.status(200).json(messages)
        } catch (err) {
            res.send(`<h1>${err}</h1>`)
        }
    },

    addMessage: async (req, res) => {
        let author = await User.findOne({username: req.body.author})
        let receiver = await User.findOne({username: req.body.receiver})
        Message.create({
            author: author._id,
            receiver: receiver._id,
            text: req.body.text,
            time: new Date(req.body.time)
        }).then(message => res.status(200).json(message))
    },

    removeMessageById: (req, res) => {
        const {messageId} = req.body;

        Message.findByIdAndRemove(messageId)
            .then(() => {
                res.status(200).json({message: "Messaggio eliminato con successo"});
            })
            .catch((error) => {
                console.error("Errore: ", error);
                res.status(500).json({error: "Errore durante l'eliminazione del messaggio"});
            });
    }
}