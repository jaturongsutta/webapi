const {contentType} = require('./contentType')
var graphql = require('graphql');

require('../../models/content.model')
var Content  = require('mongoose').model('Content')
var query = {
    content: {
        type: contentType,
        args: {
            id: { type: graphql.GraphQLString }
        },
        resolve: async function (_, { id }) {
            var data = await Content.findOne({});
            return data;
        }
    },
    contents: {
        type: new graphql.GraphQLList(contentType),
        resolve: async function () {
            var data = await Content.find({});
            return data;
        }
    },
};


exports.query = query;