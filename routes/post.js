const express = require('express')
const { checkSchema } = require('express-validator')
const postValidationSchema = require('./validators/post')
const router = express.Router()
const PostController = require('../controllers/PostController')

// router.post('/create', checkSchema(postValidationSchema), PostController.createPost)

module.exports = router
