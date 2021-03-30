require('dotenv').config()
const jwt = require('jsonwebtoken')

function AuthToken(req, res, next){
    const authHeader = req.headers['authorization']
    const token      = authHeader && authHeader.split(' ')[1]
    if(token == null) return res.sendStatus(401)

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if(err) return res.sendStatus(403)
        req.user = user
        next()
    })
}

function TokenSignIn(user){
    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn: "6h"})
    return accessToken
}

// Exports
exports.AuthToken = (req, res, next) => AuthToken(req, res, next)
exports.TokenSignIn = (user) => TokenSignIn(user)