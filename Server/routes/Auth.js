// Import Controller
const AuthController = require('../controller/AuthController.js')

// Import package
const router = require('express').Router()

router.post('/auth/login', AuthController.login )
router.post('/auth/register', AuthController.register)
router.post('/auth/logout', AuthController.logout)

module.exports = router