const express = require('express');
const bodyParser = require('body-parser')

const { PORT } = require('./config/serverConfig')
// const { sendBasicEmail } = require('./services/email-service')

const jobs = require('./utils/job')
const TicketController = require('./controllers/ticket-controller')

const setupAndStartServer = async () => {

    const app = express();
 
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended:true}))
    app.use('/api/v1/tickets',TicketController.create)
    app.listen(PORT,()=>{
        console.log(`Started server at PORT ${PORT}`)
        jobs();
    })

    // await sendBasicEmail(
    //     'golirahul21@gmail.com',
    //     'dasariwineethoo7@gmail.com',
    //     'This is a testing mail',
    //     'Pora pulkaaaa'
    // )
}

setupAndStartServer();