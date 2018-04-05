var graphql = require('graphql');
const contentType = new graphql.GraphQLObjectType({
    name: 'Content',
    fields: {
        id: { type: graphql.GraphQLString },
        title: { type: graphql.GraphQLString },
        detail: { type: graphql.GraphQLString },
        page: { type: graphql.GraphQLString },
        group: { type: graphql.GraphQLString },
        img: { type: graphql.GraphQLString },
    }
});

exports.contentType = contentType;