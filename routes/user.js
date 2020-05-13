const express = require('express')

// change to correct file when needed , this folder doesn't exist yet
const userController = require('../controller/')

const router = express.Router()

// I assume we will be having login,register and profile pages

router.get('/register', userController.register)

router.get('/login', userController.login)

router.get('/login', userController.profile)
