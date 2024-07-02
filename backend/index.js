const express = require('express')
const cors = require('cors')
require('dotenv').config()
const connectDB = require('./config/db')
const router = require('./routes')

const app = express()
app.use(cors())
app.use("/api", router)

const PORT = 8000 || process.env.PORT

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("DB connected!")
        console.log(`Server is started at Port:${PORT}...`)
    })
})