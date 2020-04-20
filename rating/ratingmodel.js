var mongoose = require('mongoose');

var RatingSchema = new mongoose.Schema({
    rating:{
        type:Number,
        required:true
    },
    moviename:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'movies'
    },
    ratedBy:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'user'
        }
    ]

});

var model = mongoose.model('ratings',RatingSchema);

module.exports=model;