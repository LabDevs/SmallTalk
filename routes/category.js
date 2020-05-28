const express = require('express')
const categoryController = require('../controllers/category')
const router = express.Router()
const auth = require('../middleware/authenticate')

router.get('/api/categories', auth, categoryController.getAll)

router.get('/api/categoryId/:id', auth, categoryController.getById)

module.exports = router
