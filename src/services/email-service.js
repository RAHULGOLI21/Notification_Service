const sender = require('../config/email-config')

const sendBasicEmail = async( mailFrom, mailTo, mailSubject, mailBody,) =>{
    try {
        await sender.sendMail({
            from: mailFrom,
            to: mailTo,
            subject: mailSubject,
            text: mailBody
        })
    } catch (error) {
        console.log(`Error occured while sending email`)
        throw error
    }
}

module.exports={
    sendBasicEmail
}