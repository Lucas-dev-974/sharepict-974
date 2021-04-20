// Model Instanciation

// Import all model
const user = require('./user.js')
const picture = require('./pictures.js')
const album   = require('./albums.js')
const album_shared = require('./albums_shared.js')
const notification = require('./notifications.js')
const commentaires = require('./commentaires.js')
const album_pictures = require('./album_pictures.js')

let models = [user, picture, album, album_shared, notification, commentaires, album_pictures]

models.forEach(model => {
    model.sync({force: true})
})

