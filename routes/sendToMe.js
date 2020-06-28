const express = require('express')
const sendToMeRouter = express.Router()
const nodemailer = require('nodemailer')

const transport = {
    host: 'aoestatechariots.com',
    port: 465,
    secure: true,
    auth: {
        user: 'test@aoestatechariots.com',
        pass: 'a;D3LyNc4+bz'
    }
}

const transporter = nodemailer.createTransport(transport)
transporter.verify((error, success) => {
    if(error){
        console.error(error)
    } else{
        console.log('users ready to mail myself')
    }
})

sendToMeRouter.post('/', (req, res, next) => {
    const mail = {
        from: 'test@aoestatechariots.com',
        to: 'g.joshua.e@gmail.com',
        subject: req.body.subject,
        text: `
        from: ${req.body.name}
        contact:${req.body.email}
        contact:${req.body.phone}
        message:${req.body.text}
        `
    }
    transporter.sendMail(mail, (err, data) => {
        if(err){
            res.json({
                status:'fail'
            })
        } else{
            res.json({
                status: 'success'
            })
        }
    })
})

console.log("from sendToMe")

module.exports = sendToMeRouter