
require('../models/content.model')
var Content  = require('mongoose').model('Content')

var getcontent = async function() { 
    var data = await Content.findOne({});
    return data;
}

var getcontents = async function(args) {
    var data = await Content.find({});
    return data;
}
var data = {
    content: getcontent,
    contents: getcontents,
}

exports.content = data;