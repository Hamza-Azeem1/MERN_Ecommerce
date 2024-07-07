const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
require('dotenv').config()
const connectDB = require('./config/db')
const router = require('./routes')

const app = express()

// app.use(cors({
//     origin: process.env.FRONTEND_URL,
//     credentials: true
// }))

const corsOptions = {
    origin: ['https://myshop.vercel.app'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept'],
    credentials: true,
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

// Handle preflight requests
app.options('*', cors(corsOptions));

app.use(express.json())
app.use(cookieParser())

app.use("/api", router)

const PORT = 8000 || process.env.PORT

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("DB connected!")
        console.log(`Server is started at Port:${PORT}...`)
    })
})
