const express = require('express')
const loginValidator = require('./validators/login')
const router = express.Router()
const AuthController = require('../controllers/AuthController')

router.post('/login', loginValidator, AuthController.login)

// router.post('/register', function(req, res, next) {
//   res.send('respond with a resource')
// })

module.exports = router
