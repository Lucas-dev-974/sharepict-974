const Notification = require('../models/notifications.js')

const utils = require('../services/utils.js')


exports.send_albums_shared = async (req, res, next) => {
    let Validator = utils.requireQueries(['to_user', 'album_id'], req.body)
    if(Validator !== true) return res.json({"success": false, "error": Validator})

}