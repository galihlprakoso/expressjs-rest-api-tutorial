const express = require('express')
const jwt = require('../lib/jwt')
const postValidator = require('./validators/post')
const router = express.Router()
const PostController = require('../controllers/PostController')

router.get('/user', jwt.middleware, PostController.getUserPosts)

router.get('/user/:id', jwt.middleware, PostController.getUserPost)

router.post('/user', [
  postValidator, jwt.middleware
], PostController.createPost)

router.put('/user/:id', [
  postValidator, jwt.middleware,
], PostController.updatePost)

router.delete('/user/:id', jwt.middleware, PostController.deletePost)

router.get('/', PostController.getPosts)

router.get('/:id', PostController.getPost)

module.exports = router
