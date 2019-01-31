var express = require('express');
var router = express.Router();
var controller = require('./moviecontroller');
var verifyUser=require('./moviecontroller').verifyUser;
router.get('/',verifyUser(),controller.getAllMovies)

router.post('/addMovie',verifyUser(),controller.addMovie);
module.exports=router;