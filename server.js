var express=require('express');
var app=express();
var apirouter=require('./api');
var config=require('./config/config');
require('mongoose').connect(config.dburl);

app.get('/t',function(req,res){
    res.send("test")
})
app.use('/api',apirouter);

module.exports=app;