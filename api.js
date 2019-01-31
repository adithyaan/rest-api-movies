var express = require('express');
var router = express.Router();
var userRouter = require('./users/userroutes');
var movieRouter = require('./movies/movieroutes');
var ratingRouter = require('./rating/ratingroutes');

router.use('/users',userRouter);
router.use('/movies',movieRouter);
router.use('/rating',ratingRouter);

module.exports=router;