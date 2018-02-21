var User  = require('mongoose').model('User')

exports.read = function(req,res){
     res.json(req.user)
}

exports.userByUsername = function(req,res,next,username){
    User.findOne({
        username : username
    },function(err,user){
        if(err){
            return next(err)
        }
        else{
            req.user = user
            next()
        }
    })
}


exports.list = function(req,res,next){
    User.find({},function(err,users){
        if(err){
            return next(err)
        }
        else{
            res.json(users)
        }
    })
}

exports.create = function(req,res,next){
    var user  = new User(req.body)
    user.save(function(err){
        if(err){
            return next(err)
        }
        else{
            res.json(user)
        }
    })
}

exports.update =function(req,res,next){
    User.findOneAndUpdate({username:req.user.username},req.body,
        function(err, user){
            if(err){
                return next(err)
            }
            else{               
                res.json(user)
            }
        }
    )
}

exports.delete =function(req,res,next){
    req.user.remove(function(err){
            if(err){
                return next(err)
            }
            else{               
                res.json(req.user)
            }
        }
    )
}



exports.renderSignup =function(req,res){
    if(!req.user){
        res.render('signup',{
            title : 'Sign up',
            message : req.flash('error')
        })
    }
    else{
        return redirect('/')
    }
}

exports.signup =function(req,res,next){
    if(!req.user){
        var user = new User(req.body)
        user.provider = 'local'
        console.log(user)
        user.save(function(err){
            if(err){
                var message = getErrorMessage(err)
                
                req.flash('error',message)

                return res.redirect('/signup')
            }
            req.login(user,function(err){
                if(err){
                    return next(err)
                }
                return res.redirect('/')
            })
        })
    }
    else{
        return res.redirect('/')
    }
}

var getErrorMessage = function(err){
    var message = '';
    if(err.code){
        switch(err.code){
            case 11000:
            case 11001:
                message = "Username already exists"
                break;
            default:
                message = 'Something wrong'
                break;
            
        }
    }
    else{
        for(var errName in err.error){
            if(err.errors[errName].message){
                message = err.error[errName].memssage;
            }
        }
    }
    return message;
}