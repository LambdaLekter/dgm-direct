const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String,
    friends: [{type: Schema.Types.ObjectId, ref: "User"}]
})

module.exports = mongoose.model("User", userSchema)