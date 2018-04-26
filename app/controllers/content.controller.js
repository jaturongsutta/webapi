var Content = require('mongoose').model('Content')

exports.render = function (req, res) {

    Content.find({}, function (err, contents) {
        if (err) {
            return next(err)
        }
        else {
            res.render('content', {
                title: "Hello World",
                contents
            })
        }
    })

}

exports.renderInfo = function (req, res) {
    console.log('renderInfo : ' +  req.content);
    res.render('content-info', {
        title: "Hello World",
        content : req.content
    })

}


exports.contentById = function(req,res,next,id){
    
    Content.findOne({
        _id : id
    },function(err,content){
        if(err){
            return next(err)
        }
        else{
            req.content = content
            next()
        }
    })
}



exports.apicontents = function (req, res) {
    Content.find({}, function (err, content) {
        if (err) {
            return next(err)
        }
        else {
            res.json(content);
        }
    })
}

exports.save = function (req, res, next) {
    console.log(req.body)

    var content = new Content(req.body)
    content.save((err) => {
        if (err) {
            console.log(err)
            var message = getErrorMessage(err)
            // req.flash('error',message)
            return res.json(message)
        }

        return res.redirect('/content')
    })

}


var getErrorMessage = function (err) {
    var message = '';
    if (err.code) {
        switch (err.code) {
            case 11000:
            case 11001:
                message = "Username already exists"
                break;
            default:
                message = 'Something wrong'
                break;

        }
    }
    else {
        for (var errName in err.error) {
            if (err.errors[errName].message) {
                message = err.error[errName].memssage;
            }
        }
    }
    return message;
}