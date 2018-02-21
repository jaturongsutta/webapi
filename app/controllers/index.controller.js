exports.render = function(req,res){
   var isLogdedIn = false
    // if(typeof req.session.remember !== 'undefined'){
    //     isLogdedIn = req.session.remember
    // }

    res.render('index',{
        title : "Hello World",
        username : req.user ? req.user.username : '',
        isLogdedIn : isLogdedIn
    })

}