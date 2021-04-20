const AlbumsController = require ("../controller/AlbumsController.js")

const router = require('express').Router()
const TokenAuth = require('../services/JWToken.js').AuthToken

route.post('/api/albums/add', AlbumsController.add)


module.exports = router