const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    firstName: String,
    lastName: String,
    username: String,
    email: String,
    password: String,
    friends: [{type: Schema.Types.ObjectId, ref: "User"}]
})

module.exports = mongoose.model("User", userSchema)