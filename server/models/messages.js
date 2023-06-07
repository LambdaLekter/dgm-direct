const mongoose = require('mongoose')
const Schema = mongoose.Schema

const messageSchema = new Schema({
    author: {type: Schema.Types.ObjectId, ref: "User"},
    receiver: {type: Schema.Types.ObjectId, ref: "User"},
    text: String,
    time: Date
})

module.exports = mongoose.model("Message", messageSchema)