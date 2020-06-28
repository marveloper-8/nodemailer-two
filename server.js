const express = require('express')
const app = express()
require('dotenv').config()
const morgan = require('morgan')
const nodemailer = require('nodemailer')
const PORT = process.env.PORT || 9999

app.use(morgan('dev'))
app.use(express.json())
app.use('/send-to-me', require('./routes/sendToMe'))

app.listen(PORT, () => {
    console.log("Server is running on ", PORT)
})