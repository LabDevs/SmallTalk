const express = require('express')
const eventController = require('../controllers/event')
const router = express.Router()
const authentication = require('../middleware/authenticate')

router.use(authentication)

router.get('/api/categories/:categoryId', eventController.getAllByCategory)

router.get('/api/getEvents', eventController.getAllByUser)

router.post('/api/add', eventController.add)

router.put('/api/update', eventController.update)

router.get('/api/event', eventController.show)

router.delete('/api/remove', eventController.remove)

router.get('/api/event/:eventId', eventController.getById)

module.exports = router
