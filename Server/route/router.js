const express = require('express');
const router=express();
const gestionController = require('../controllers/gestionController.js');

router.get("/",gestionController.liste);


module.exports = router;