var graphql = require('graphql');
const companyType = new graphql.GraphQLObjectType({
    name: 'Company',
    fields: {
        id: { type: graphql.GraphQLString },
        name: { type: graphql.GraphQLString },
    }
});

exports.companyType = companyType;