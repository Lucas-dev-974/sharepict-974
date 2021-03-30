// Import package
const express = require('express')
require('dotenv').config()

// Import Route
const AuthRoute = require('./routes/Auth.js')

const app = express()
app.use(express.json())

// Use routes in app
app.use(AuthRoute)

app.listen(8080, () => {
    console.log('Serveur à l\'écoute')
})
