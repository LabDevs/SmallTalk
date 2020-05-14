const express = require('express')
const rsvpController = require('../controllers/rsvp')
const router = express.Router()

router.post('/rsvp', rsvpController.add)

router.get('/rsvp/user', rsvpController.getByUser)

module.exports = router
