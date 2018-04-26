var express = require('express')
var session = require('express-session');
var bodyParser = require('body-parser')
var passport = require('passport')
var flash = require('connect-flash')
var cors = require('cors')
var path = require('path');




module.exports  = function(){
    var app  = express();
    
    app.use(session({ cookie: { maxAge: 60000 }, 
    secret: 'asdfgj',
    resave: false, 
    saveUninitialized: false})) 
    app.use(express.static(path.join(__dirname,'../AdminLTE-2.4.3')))


    app.use(cors())

    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());
    app.use(flash())
    app.use(passport.initialize())
    app.use(passport.session())


    app.use('/images', express.static(__dirname + '../../app/images'));
    app.use('/css', express.static(__dirname + '../../app/css'));
    app.use('/js', express.static(__dirname + '../../app/js'));
    
    require('../app/routes/index.routes')(app)
    require('../app/routes/user.routes')(app)
    require('../app/routes/content.routes')(app)
    return app
}