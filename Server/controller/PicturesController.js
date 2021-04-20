// Import model
const multer = require('multer');
const Pictures = require('../models/pictures.js')

// Import package
const fs     = require('fs')
const upload = require('../services/Medias.js')
const utils  = require('../services/utils.js')


exports.get = async (req, res, next) => {
    let requiredValidator = utils.requireQueries(["picture_id"], req.body)
    if(requiredValidator !== true) return res.json({errors: requiredValidator, success: false})
    const pict = await Pictures.findByPk(req.body.picture_id)
    if(pict === null) return res.json({"success": false, "error": "L'image n'existe pas ou plus"})
    return res.sendFile(pict.dataValues.path, { root: '.' })
}

exports.add_picture = (req, res, next) => { 
    upload(req, res, async function(err){
        if(req.file_error) return res.json({"success": false, "error": req.file_error})
        if(!req.file)      return res.json({"success": false, "error": "Veuillez spécifié une image"})
        
        const pict = await Pictures.create({
            user_id: req.user.id, 
            name:    req.file.originalname.split(".")[0],
            path: req.file.path,
            status: "private"
        })
        pict.save()
        return res.json({"success": true})
    })  

}

exports.delete_picture = async (req, res, next) => {
    let requiredValidator = utils.requireQueries(["picture_id"], req.body)
    if(requiredValidator !== true) return res.json({errors: requiredValidator, success: false})
    console.log();
    const pict = await Pictures.findByPk(req.body.picture_id)
    if(pict === null) return res.json({"success": false, "error": "L'image n'existe pas ou plus."})
    await pict.destroy()
    try{
        fs.unlinkSync(global.base_path + "/" + pict.dataValues.path)
        return res.json({"success": true})
    }catch(err){
        return res.json({"success": false, "error": "L'image n'existe pas ou plus sur le server."})
    }
}