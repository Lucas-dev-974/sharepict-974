const express = require('express')
const app = express()

// Database init
require('./model/init_db.js')
app.listen(8080, () => {
    console.log('Serveur à l\'écoute')
})

app.get('/create-user', (req,res) => {
    res.status(200).json(parkings)
})