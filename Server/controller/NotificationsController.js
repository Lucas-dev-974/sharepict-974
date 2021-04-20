const Notification = require('../models/notifications.js')

const utils = require('../services/utils.js')


exports.add = async (req, res, next) => {
    let Validator = utils.requireQueries(['to_user', 'album_id'], req.body)
    if(Validator !== true) return res.json({"success": false, "error": Validator})
    
}