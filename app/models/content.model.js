var mongoose = require('mongoose')
var Schema = mongoose.Schema

var ContentSchema = new Schema({
    title : String,
    detail : String,
    page : String,
    group : String,
    img : String,
    value1 : String,
    value2 : String,
    value3 : String,
    value4 : String,
})


mongoose.model('Content',ContentSchema)