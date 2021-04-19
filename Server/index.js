// Import package
const express = require('express')
require('dotenv').config()
// const TokenAuth = require('../services/JWToken.js').AuthToken
const cors=require("cors");
// Import Route
const AuthRoute = require('./routes/Auth.js')
const UserRoute = require('./routes/UserRoutes.js')
const PictureRoute = require('./routes/PicturesRoute.js')


const app = express()
app.use(express.json())
app.use(cors()); 
// Use routes in app
app.use(AuthRoute);
app.use(UserRoute);
app.use(PictureRoute)



app.listen(8080, () => {
    console.log('Serveur à l\'écoute')
})
