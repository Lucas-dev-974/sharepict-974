// Model import
const { update } = require('../models/user.js');
const User = require('../models/user.js')

// Import packages
const utils = require('../services/utils.js')
const bcrypt = require('bcrypt')


exports.update_pp = async (req, res, next) => {
    // console.log(req);
    // let user = await User.findOne({ where: {id: req.user.id}});
    // console.log(user);
    return res.send("user")
}

exports.update_pseudo = async (req, res, next) => {
    // Check attemted values
    let requiredValidator = utils.requireQueries(["pseudo"], req.body)
    if(requiredValidator !== true) return res.json({success: false, errors: requiredValidator})

    let updated = await User.update({pseudo: req.body.pseudo}, {
        where: {id: req.user.id}
    })
    if(!updated) return res.json({success: false, errors: "Une erreur est survenue"})
    return res.json({success: true})
 }

exports.update_email = async (req, res, next) => {
    // Check attemted values
    let requiredValidator = utils.requireQueries(["email"], req.body)
    if(requiredValidator !== true) return res.json({success: false, errors: requiredValidator})
    let updated = await User.update({email: req.body.email}, {
        where: {id: req.body.id}
    })
    if(!updated) return res.json({success: false, errors: "Une erreur est survenue"})
    return res.json({successs: true})
}

exports.update_password = async (req, res, next) => {
    // Check attemted values
    let requiredValidator = utils.requireQueries(["new_password"], req.body)
    if(requiredValidator !== true) return res.json({success: false, errors: requiredValidator})

    let password = bcrypt.hashSync(req.body.password, 10)
    let updated = await User.update({password: password}, {
        where: {id: req.user.id}
    })

    if(!updated) return res.json({success: false, errors: "Une erreur est survenue"})
    return res.json({success: true})
}

exports.delete_pp = async (req, res, next) => {
    
}