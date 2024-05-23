const sender = require('../config/email-config')
const TicketRepository =require('../repository/ticket-repository')

// This mail sevice need not be await because we dont need immediatley but not too lately
//******** we can we NODE-CORN/NODE-SHEDULER npm package to send emails at particular time ******* 
const ticketRepository = new TicketRepository();

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

const fetchPendingEmails = async(timeStamp) =>{
    try {
        const filter ={
            status: "PENDING"
        }
        const response = await ticketRepository.get(filter);
        return response;
    } catch (error) {
        throw error;
    }
}

const createNotification = async(data)=>{
    try {
        const ticket = ticketRepository.create(data);
        return ticket;
    } catch (error) {
        throw error;
    }
}

const updateTicket= async(ticketId,data)=>{
    try {
        const ticket= ticketRepository.update(ticketId,data);
        return ticket;
    } catch (error) {
        throw error;
    }
}

module.exports={
    sendBasicEmail,
    fetchPendingEmails,
    createNotification,
    updateTicket
}