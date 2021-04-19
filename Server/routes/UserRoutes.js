// Import controller
const UserController = require('../controller/UserController.js')

// Import package
const router = require('express').Router()
const TokenAuth = require('../services/JWToken.js').AuthToken
const upload = require('../services/Medias.js')

router.post('/api/user/update-pp',     TokenAuth, UserController.update_pp)
router.post('/api/user/update-mail',   TokenAuth, UserController.update_email)
router.post('/api/user/update-pass',   TokenAuth, UserController.update_password)
router.post('/api/user/update-pseudo', TokenAuth, UserController.update_pseudo)

module.exports = router