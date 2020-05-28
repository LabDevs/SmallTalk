const express = require('express')
const categoryController = require('../controllers/category')
const router = express.Router()
const authentication = require('../middleware/authenticate')

router.use(authentication)

router.get('/api/categories', categoryController.getAll)

router.get('/api/categoryId/:id', categoryController.getById)

module.exports = router
