// Import controller
const UserController = require('../controller/UserController.js')

// Import package
const TokenAuth = require('../services/JWToken.js').AuthToken
const router = require('express').Router()
const upload = require('../services/MulterMedias.js')

router.post('/api/user/update-pp', TokenAuth, upload, UserController.update_pp)
router.post('/api/user/update-mail', UserController.update_email)
router.post('/api/user/update-pass', UserController.update_password)
router.post('/api/user/update-pseudo', TokenAuth, UserController.update_pseudo)

module.exports = router