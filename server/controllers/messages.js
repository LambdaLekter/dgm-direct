const Message = require('../models/messages')
const User = require('../models/users')

module.exports = {
    getMessagesByUsersIds: async (req, res) => {
        try {
            let user1 = await User.findOne({username: req.params.user1})
            let user2 = await User.findOne({username: req.params.user2})
            let chat = await Message.find({ $or: [
                {author: user1._id, receiver: user2._id},
                {author: user2._id, receiver: user1._id}
            ]})
            res.json(chat)
        } catch (err) {
            res.send(`<h1>${err}</h1>`)
        }
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