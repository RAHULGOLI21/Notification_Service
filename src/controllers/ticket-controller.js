const TicketService = require('../services/email-service')

const create = async (req, res) => {
    try {
        const response = await TicketService.createNotification(req.body);
        return res.status(200).json({
            status: 'Success',
            error: {},
            data: response,
            message: 'Successfully registered a email reminder'
        })
    } catch (error) {
        return res.status(500).json({
            status: 'Success',
            error: error,
            data: {},
            message: 'Failed to register a email reminder'
        })
    }
}

module.exports = {
    create
}