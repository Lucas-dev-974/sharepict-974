// Import model
const Pictures = require('../models/pictures.js')

// Import package
const upload = require('../services/MulterMedias.js')

exports.add_picture = (req, res, next) => {
    upload(req, res, (err, rst) => {
        if(err) return res.json({ success: false, error: 'une erreur c\'est produite' })
    })
    console.log(req.user);
    return res.json({success: true})
}

exports.add_pictures = (req, res, next) => {

}