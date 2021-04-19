// Import model
const multer = require('multer');
const Pictures = require('../models/pictures.js')

// Import package
const upload = require('../services/Medias.js')

exports.add_picture = (req, res, next) => { 
    upload(req, res, function(err){
        if(!req.file) return res.json({"success": false, "error": "Veuillez spécifié une image"})

    })  

}

exports.update_pictures = (req, res, next) => {
    res.send('ok')
}