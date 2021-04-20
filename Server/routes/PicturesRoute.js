// Import controller
const PictureController = require('../controller/PicturesController.js')

// Import package
const router = require('express').Router()
const TokenAuth = require('../services/JWToken.js').AuthToken

router.get('/api/pictures/get',               TokenAuth, PictureController.get)
router.post('/api/pictures/add-picture',      TokenAuth, PictureController.add_picture)
router.delete('/api/pictures/delete-picture', TokenAuth, PictureController.delete_picture)

// router.get('/api/pictures/get-')
module.exports = router