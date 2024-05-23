const sender = require('../config/email-config')

// This mail sevice need not be await because we dont need immediatley but not too lately
//******** we can we NODE-CORN/NODE-SHEDULER npm package to send emails at particular time *******

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