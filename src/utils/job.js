const corn = require('node-cron');

const emailService = require('../services/email-service')
const sender = require('../config/email-config')


/**
 * Every 2 mins 
 * We will check , are there any pending emails which was expected to sent by now and is pending
 */


const setupJobs = () => {
    try {
        corn.schedule('*/1 * * * *', async () => {
            const emails = await emailService.fetchPendingEmails();

            emails.forEach(email => {
                // emailService.sendBasicEmail(
                //     "ReminderService@airline.com",
                //     email.recepientEmail,
                //     email.subject,
                //     email.content
                // )
                // We are using the below approach beacuse it gives us a CallBack function 
                // Which can be used to update the ticket status to SUCCESS / FAILED based on call back function

                //additionally we can setup multiple corn shedules to send reminders based on priority.

                sender.sendMail({
                    to: email.recepientEmail,
                    subject: email.subject,
                    text: email.content
                }, async (err, data) => {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log(data);
                        emailService.updateTicket(email.id, { status: "SUCCESS" })
                    }
                })
            });
            console.log(emails)

        })
    } catch (error) {
        throw error;
    }
}

module.exports = setupJobs;