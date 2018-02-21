var express = require('express')
var session = require('express-session');
var bodyParser = require('body-parser')
var passport = require('passport')
var flash = require('connect-flash')
module.exports  = function(){
    var app  = express();
    
    app.use(session({ cookie: { maxAge: 60000 }, 
    secret: 'asdfgj',
    resave: false, 
    saveUninitialized: false})) 

    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());
    app.use(flash())
    app.use(passport.initialize())
    app.use(passport.session())

    app.use('/images', express.static(__dirname + '../../app/images'));
    
    require('../app/routes/index.routes')(app)
    require('../app/routes/user.routes')(app)
    require('../app/routes/content.routes')(app)
    return app
}