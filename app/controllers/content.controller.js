var Content  = require('mongoose').model('Content')

exports.render = function(req,res){
    
     res.render('content',{
         title : "Hello World",

     })
 
 }