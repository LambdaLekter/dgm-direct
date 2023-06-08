const express = require("express")
const mongoose= require("mongoose")
const cors = require("cors")
const usersRouter = require('./routes/users')
const messagesRouter = require('./routes/messages')

// Connessione a mongoose
const password = encodeURIComponent("$Kotlin33")
mongoose.connect(`mongodb+srv://Michele17:${password}@sandboxcluster.3iklrnz.mongodb.net/dgm-direct?retryWrites=true&w=majority`)
const db = mongoose.connection
db.once("open", () => console.log("Connessione al database effettuata"))

const app = express()
const port = 3001

app.use(express.json())
app.use(cors())
app.use('/users', usersRouter)
app.use('/messages', messagesRouter)

app.listen(port, () => {
    console.log(`Server in ascolto sulla porta ${port}`)
    console.log("CORS abilitato su tutti i percorsi")
})
