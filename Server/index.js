// Import package
const express = require('express')
require('dotenv').config()
// const TokenAuth = require('../services/JWToken.js').AuthToken

// Import Route
const AuthRoute = require('./routes/Auth.js')
const UserRoute = require('./routes/UserRoutes.js')
const PictureRoute = require('./routes/PicturesRoute.js')


const app = express()
app.use(express.json())

// Use routes in app
app.use(AuthRoute);
app.use(UserRoute);
app.use(PictureRoute)



app.listen(8080, () => {
    console.log('Serveur à l\'écoute')
})
