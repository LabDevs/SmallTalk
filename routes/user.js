const express = require('express')

// change to correct file when needed , this folder doesn't exist yet
const userController = require('../controllers/user')
const router = express.Router()

router.post('/register', userController.register)

router.post('/login', userController.login)

module.exports = router
