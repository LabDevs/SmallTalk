const express = require('express')
const rsvpController = require('../controllers/rsvp')
const router = express.Router()
const auth = require('../middleware/authenticate')

router.post('/rsvp', auth, rsvpController.add)

router.get('/rsvp/user', auth, rsvpController.getByUser)

router.delete('/rsvp/remove', auth, rsvpController.cancel)

module.exports = router
