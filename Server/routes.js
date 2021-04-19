// Import Controller
const AuthController = require('./controller/UserController.js')

// Import package
const router = require('express').Router()

router.get('/albums', AuthController.listeAlbums );


module.exports = router