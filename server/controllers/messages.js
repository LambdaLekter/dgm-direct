const Message = require('../models/messages')
const User = require('../models/users')

module.exports = {
    getMessagesByUsernames: async (req, res) => {
        try {
            let user1 = await User.findOne({username: req.params.user1})
            let user2 = await User.findOne({username: req.params.user2})
            let chat = await Message.find({ $or: [
                {author: user1._id, receiver: user2._id},
                {author: user2._id, receiver: user1._id}
            ] })

            chat = chat.map( message => {
                return {
                    _id: message._id,
                    author: user1._id.equals(message.author) ? user1.username : user2.username,
                    receiver: user1._id.equals(message.receiver) ? user1.username : user2.username,
                    text: message.text,
                    time: message.time
                }
            } )

            res.json(chat)
        } catch (err) {
            console.log("Errore in getMessagesByUsernames")
            res.send(`<h1>${err}</h1>`)
        }
    },

    addMessage: async (req, _) => {
        let author = await User.findOne({username: req.body.author})
        let receiver = await User.findOne({username: req.body.receiver})
        Message.create({
            author: author._id,
            receiver: receiver._id,
            text: req.body.text,
            time: new Date(req.body.time)
        }).then( r => console.log(`Messaggio inserito: ${r}`) )
    }
}