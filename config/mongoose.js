var config = require('./config')
var mongoose = require('mongoose')

module.exports = function(){
    var db  = mongoose.connect(config.mongoUri)

    require('../app/models/user.model')
    require('../app/models/content.model')
    require('../app/models/booking.model')

    return db;
}
