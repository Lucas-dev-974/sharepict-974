const AlbumsController = require ("../controller/AlbumsController.js")

const router = require('express').Router()
const TokenAuth = require('../services/JWToken.js').AuthToken

router.post('/api/albums/add', TokenAuth, AlbumsController.add)


module.exports = router