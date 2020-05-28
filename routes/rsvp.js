const express = require('express')
const rsvpController = require('../controllers/rsvp')
const router = express.Router()

router.post('/api/rsvp', rsvpController.add)

router.get('/api/rsvp/user', rsvpController.getByUser)

router.delete('/api/rsvp/remove', rsvpController.cancel)

module.exports = router
