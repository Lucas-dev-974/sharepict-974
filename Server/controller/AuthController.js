// Import Model
const User = require('../models/user.js')

// Import package
const utils = require('../services/utils.js')
const token_services = require('../services/JWToken.js')
const bcrypt = require('bcrypt')


exports.login = async (req, res, next) => {
    // Check attempted values
    let requiredValidator = utils.requireQueries(["email", "password"], req.body)
    if (requiredValidator !== true) return res.json({ success: false, errors: requiredValidator })

    const user = await User.findOne({ where: { email: req.body.email } });


    // Check password
    const password_match = await bcrypt.compare(req.body.password, user.password)
    if (!password_match) return res.json({ success: false, errors: "Mot de passe incorrecte" })

    // Set user token
    const accessToken = token_services.TokenSignIn({
        user: {
            id: user.id, email: user.email, name: user.name, lastname: user.lastname, pseudo: user.pseudo
        }
    })
    res.json({ Token: accessToken, success: true, user: user })
}

exports.register = async (req, res, next) => {
    // requiredQueries -> ./services/utils.js params[required(values attempted for request), queries(values given from request)]
    let requiredValidator = utils.requireQueries(["email", "name", "lastname", "pseudo", "password", "password_verified"], req.body)
    if (requiredValidator !== true) return res.json({ errors: requiredValidator, success: false })// If not all values is given so return errors

    let user = await User.findOne({ where: { email: req.body.email } });

    if (user !== null) return res.json({ success: false, errors: "L'email est déjà enregistrer" })

    if (req.body.password !== req.body.password_verified) return res.json({ success: false, error: "Les mots de passe ne correspondent pas !" })
    let password = bcrypt.hashSync(req.body.password, 10)


    const usr = await User.create({
        email: req.body.email,
        name: req.body.name,
        lastname: req.body.lastname,
        pseudo: req.body.pseudo,
        password: password
    })

    usr.save()

    // Set Token
    const accessToken = token_services.TokenSignIn({
        user: {
            id: usr.dataValues.id, email: usr.dataValues.email, name: usr.dataValues.name, lastname: usr.dataValues.lastname, pseudo: usr.dataValues.pseudo
        }
    })

    res.json({ success: true, Token: accessToken, user: usr })


    // res.send("user")
}

exports.logout = (req, res, next) => {
    req.body.user.deleteToken(req.body.token, (err, user) => {
        if (err) res.json({ success: false, errors: err })
        res.json({ success: true })
    })
}