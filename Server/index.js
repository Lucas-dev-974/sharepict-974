// Import package
const express = require('express')
const path    = require('path');
require('dotenv').config()
const headerApi = require('./configApi');
const cors      = require("cors");

global.base_path = __dirname
// require('./models/model_instant')

// Import Route
const AuthRoute = require('./routes/Auth.js')
const UserRoute = require('./routes/UserRoutes.js')
const PictureRoute = require('./routes/PicturesRoute.js')
const CommentaireRoute = require('./routes/CommentairesRoute.js')


var app = express()
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(headerApi); 

// Use routes in app
app.use(AuthRoute);
app.use(UserRoute);
app.use(PictureRoute)
app.use(CommentaireRoute)


app.listen(8080, () => {
    console.log('Serveur à l\'écoute')
})