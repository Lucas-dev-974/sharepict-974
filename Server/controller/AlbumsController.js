const Albums         = require('../models/albums.js')
const Album_pictures = require('../models/album_pictures.js')


const utils = require('../services/utils.js')

exports.add = async (req, res, next) => {
    let Validator = utils.requireQueries(['name'], req.body)
    if(Validator !== true) return res.json({"success": false, "error": Validator})

    const album = await Albums.create({
        user_id: req.user.id,
        name: req.body.name
    })
    album.save()

    return res.json({"success": true})
}   

exports.append_pict = async (req, res, next) => {
    let Validator = utils.requireQueries(['album_id', 'picture_id'], req.body)
    if(Validator !== true) return res.json({"success": false, "error": Validator})
    const album = await Albums.findByPk(req.body.album_id)
    if(album === null) res.json({"success": false, "error": "L'album n'existe pas ou plus."})
    if(album.dataValues.user_id !== req.user.id) res.json({"success": false, "error": "Vous devez être le proprietaire de l'album"})

    const alb_pict = await Album_pictures.create({
        album_id: req.body.album_id,
        picture_id: req.body.picture_id
    })

    await alb_pict.save()
    return res.json({"success": true})
}