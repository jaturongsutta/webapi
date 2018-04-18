var Content  = require('mongoose').model('Content')

exports.render = function(req,res){
    
    Content.find({},function(err,contents){
        if(err){
            return next(err)
        }
        else{
            res.render('content',{
                title : "Hello World",
                contents 
            })
        }
    })
 
 }


 
exports.apicontents = function(req,res){
    Content.find({},function(err,content){
        if(err){
            return next(err)
        }
        else{
            res.json(content);
        }
    })
}