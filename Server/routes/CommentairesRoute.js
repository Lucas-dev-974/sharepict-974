const CommentaireController = require('../controller/CommentaireController.js')

const router = require('express').Router()
const TokenAuth = require('../services/JWToken.js').AuthToken

router.post('/api/commentaires/add', TokenAuth, CommentaireController.add)
router.delete('/api/commentaires/delete', TokenAuth, CommentaireController.delete)

module.exports = router