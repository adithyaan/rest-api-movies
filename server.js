var express=require('express');
var app=express();
var middleware=require('./middleware/appmiddleware')(app);
var apirouter=require('./api');
var router=express.Router();
var config=require('./config/config');
require('mongoose').connect(config.dburl);

app.get('/t',function(req,res){
    res.send("test")
})
app.use('/api',apirouter);

module.exports=app;