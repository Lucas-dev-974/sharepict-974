const Commentaire = require('../models/commentaires.js')

const utils = require('../services/utils.js')

exports.add = async (req, res, next) => {
    let Validator = utils.requireQueries(['commentaire', 'picture_id'], req.body)
    if(Validator !== true) return res.json({"success": false, "error": Validator})
    const com = await Commentaire.create({
        user_id: req.user.id,
        picture_id: req.body.picture_id,
        commentaire: req.body.commentaire
    })
    com.save()
    return res.json({"success": true})
}

exports.delete = async (req, res, next) => {
    let Validator = utils.requireQueries(['commentaire_id'], req.body)
    if(Validator !== true) return res.json({"success": false, "error": Validator})
    const com = await Commentaire.findByPk(req.body.commentaire_id )
    if(com.dataValues.user_id !== req.user.id) return res.json({"success": false, "error": "Vous devez être le titulaire du commentaire pour pouvoir le supprimé"})
    let state = await com.destroy()
    return (state) ? res.json({"success": true}) : res.json({"success": false, "error": "Une erreur est survenue lors de la suppression du commentaire."})
}