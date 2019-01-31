var express=require('express');
var router=express.Router();
var controller = require('./ratingcontroller');

router.get('/hello',function(req,res){
    controller.putRating(req,res)

})
module.exports=router;