require('dotenv').config()
const jwt = require('jsonwebtoken')
const User = require('../models/user')

async function AuthToken(req, res, next){
    const authHeader = req.headers['authorization']
    const token      = authHeader && authHeader.split(' ')[1]
    if(token == null) return res.sendStatus(401)
    
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, async (err, user) => {
        const usr = await User.findOne({
            where: {
                email: user.user.email
            }
        })
        
        if(err) return res.sendStatus(403)
        else if(usr === null) return res.json({"success": false, "error": "Veuillez vous-enregistrez !"})
        else    req.user = user.user
        next()
    })

}

function TokenSignIn(user){
    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET) // {expiresIn: "6h"} use it to expire token after 6 houres
    return {token: accessToken, user: user}
}

// Exports
exports.AuthToken   = (req, res, next) => AuthToken(req, res, next)
exports.TokenSignIn = (user) => TokenSignIn(user)