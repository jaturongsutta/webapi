
require('../models/content.model')
var Content  = require('mongoose').model('Content')

var getcompany = async function() { 
    var data = await Content.findOne({});
    return data;
}

var getcompanys = async function(args) {
    var data = await Content.find({});
    return data;
}
var data = {
    company: getcompany,
    companys: getcompanys,
}

exports.company = data;