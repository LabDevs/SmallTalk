const express = require('express')

// change to correct file when needed , this folder doesn't exist yet
const userController = require('../controllers/user')
console.log(userController)
const router = express.Router()

// router.get('/register', userController.registerPage)

router.post('/register', userController.register)

router.get('/login', userController.login)

router.get('/profile', userController.profile)

module.exports = router
