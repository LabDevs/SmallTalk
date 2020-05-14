const express = require('express')
const eventController = require('../controllers/event')
const router = express.Router()

router.get('/api/categories/:id', eventController.getAllByCategory)

router.get('/api/getEvents', eventController.getAllByUser)

router.post('/add', eventController.add)

router.put('/profile/update/:id', eventController.update)

router.get('/event/:id', eventController.show)

router.delete('/profile/remove/:id', eventController.remove)

module.exports = router
