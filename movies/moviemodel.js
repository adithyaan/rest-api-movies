var mongoose = require('mongoose');

var MovieSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    releasedon:{
        type:String,
        required:true
    },
    casts:{
        type:String,
        required:true
    },
    rating:[ {type:Object}]

});



var model=mongoose.model('movies',MovieSchema);

module.exports=model;