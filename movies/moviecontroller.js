var model = require('./moviemodel');
var jwt = require('jsonwebtoken');
var config = require('../config/config');

exports.getAllMovies = function(req,res){
    var promise = model.find({})
                        .populate('rating')
                        .exec();
        promise.then(function(data){
                    res.send(data)
                        },function(err){
                            res.send(err)
                        })
    
}

exports.addMovie = function(req,res){
    model.create(req.body,function(err,movieinfo){
        if(err){
            res.send(err)
        }
        else{
            res.json({message:"sucees",movieinfo})
        }
    })
}

exports.verifyUser = function(){
    return( function(req,res,next){
        console.log(req.headers['authorization'])
    jwt.verify(req.headers['authorization'],config.secret,function(err,decoded){
        if(err){
           res.send(err)
        }
        else{
            next();
        }
    })
}
    )
}