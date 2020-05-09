const express = require('express')
const loginValidator = require('./validators/login')
const registerValidator = require('./validators/register')
const router = express.Router()
const AuthController = require('../controllers/AuthController')

router.post('/login', loginValidator, AuthController.login)
router.post('/register', registerValidator, AuthController.register)

module.exports = router
