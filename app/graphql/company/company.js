const { companyType } = require('./companyType')
//var Content = require('mongoose').model('Content')
var graphql = require('graphql');
var query = {
    company: {
        type: companyType,
        args: {
            id: { type: graphql.GraphQLString }
        },
        resolve: function (_, { id }) {
            return { id: "a", name: "name" };
        }
    },
    company2: {
        type: companyType,
        args: {
            id: { type: graphql.GraphQLString }
        },
        resolve: function (_, { id }) {
            return { id: "a", name: "name" };
        }
    },
};


exports.query = query;