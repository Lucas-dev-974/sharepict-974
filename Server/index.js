// Import package
const express = require('express')
require('dotenv').config()

global.base_path = __dirname
// Import Route
const AuthRoute = require('./routes/Auth.js')
const UserRoute = require('./routes/UserRoutes.js')
const PictureRoute = require('./routes/PicturesRoute.js')
const CommentaireRoute = require('./routes/CommentairesRoute.js')

// Uncomment next line to make table migration
// require('./models/model_instant.js')

// Express config
const app = express()
app.use(express.json())

// Use routes in app
app.use(AuthRoute);
app.use(UserRoute);
app.use(PictureRoute)
app.use(CommentaireRoute)

app.listen(8080, () => {
    console.log('Serveur à l\'écoute')
})
