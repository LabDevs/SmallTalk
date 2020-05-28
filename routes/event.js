const express = require('express')
const eventController = require('../controllers/event')
const router = express.Router()
const auth = require('../middleware/authenticate')

router.get(
  '/api/categories/:categoryId',
  auth,
  eventController.getAllByCategory
)

router.get('/api/getEvents', auth, eventController.getAllByUser)

router.post('/add', auth, eventController.add)

router.put('/update', auth, eventController.update)

router.get('/api/event', auth, eventController.show)

router.delete('/remove', auth, eventController.remove)

router.get('/api/event/:eventId', auth, eventController.getById)

module.exports = router
