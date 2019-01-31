var model = require('./ratingmodel');
var moviemodel= require('../movies/moviemodel')
exports.putRating = function(req,res){
    var obj = {rating:1331200,moviename:'5c516f13e06b87280471172e',ratedBy:'5c5156d447f3ae1ff433dc66'}
    model.create(obj,function(err,data){
        if(err){
            res.send(err);
        }
        else{

            moviemodel.findOneAndUpdate({_id:obj.moviename},{$push:{rating:obj}},function(err,doc){
                res.send(doc);
            })
            // res.send(data);
        }
    })
    
}
exports.getAllRating=function(req,res){
    var promise= model.find({})
          .populate('ratedBy moviename')
          .exec()
          promise.then(function(data){
              res.send(data)
          },function(err){
              res.send(err)
          })
 }