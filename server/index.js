const express = require("express")
const mongoose= require("mongoose")
const cors = require("cors")
const apiRouter = require('./routes/api')
const https = require("https");

const app = express()
const port = 3001

// Connessione a mongoose
const password = encodeURIComponent("$Kotlin33")
mongoose.connect(`mongodb+srv://Michele17:${password}@sandboxcluster.3iklrnz.mongodb.net/dgm-direct?retryWrites=true&w=majority`)
const db = mongoose.connection
db.once("open", () => {
    console.log("Connessione al database effettuata")
    // https.createServer(app)
    //     .listen(port, () => console.log(`Server in ascolto sulla porta ${port}`))
    app.listen(port, () => console.log(`Server in ascolto sulla porta ${port}`))
})

app.use(express.json())
app.use(cors())
app.use('/api', apiRouter)

console.log("CORS abilitato su tutti i percorsi")

// TODO: Rinominare le cartelle src e server in frontend e backend