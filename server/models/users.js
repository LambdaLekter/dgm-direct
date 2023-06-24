const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    firstName: String,
    lastName: String,
    username: { type: String, unique: true },
    email: { type: String, unique: true /*, match: '^[w-.]+@([w-]+.)+[w-]{2,4}$'*/ },
    password: String,
    friends: [{type: Schema.Types.ObjectId, ref: "User"}]
})

module.exports = mongoose.model("User", userSchema)

// TODO sistemare il controllo della mail