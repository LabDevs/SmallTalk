const express = require('express')
const eventController = require('../controllers/event')
const router = express.Router()

router.get('/api/categories/:categoryId', eventController.getAllByCategory)

router.get('/api/getEvents', eventController.getAllByUser)

router.post('/add', eventController.add)

router.put('/update', eventController.update)

router.get('/api/event', eventController.show)

router.delete('/remove', eventController.remove)

router.get('/api/event/:eventId', eventController.getById)

module.exports = router
