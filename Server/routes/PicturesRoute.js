// Import controller
const PictureController = require('../controller/PictureController.js')

// Import package
const router = require('express').Router()
const TokenAuth = require('../services/JWToken.js').AuthToken

router.post('/api/pictures/add-picture', TokenAuth, PictureController.add_picture)
router.post('/api/pictures/update-picture', TokenAuth, PictureController.update_pictures)

module.exports = router