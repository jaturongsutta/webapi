var graphql = require('graphql');
const userType = new graphql.GraphQLObjectType({
    name: 'User',
    fields: {
        id: { type: graphql.GraphQLString },
   
        firstName :{ type: graphql.GraphQLString },
        lastName  :{ type: graphql.GraphQLString },
        username  :{ type: graphql.GraphQLString },
        password  :{ type: graphql.GraphQLString },
        salt  :{ type: graphql.GraphQLString },
        email  :{ type: graphql.GraphQLString },
        provider  :{ type: graphql.GraphQLString },
        providerId  :{ type: graphql.GraphQLString },
        providerData :{ type: graphql.GraphQLString },
        picture  :{ type: graphql.GraphQLString },
        gmcToken  :{ type: graphql.GraphQLString },
        loginType  :{ type: graphql.GraphQLString },
        fcUserId  :{ type: graphql.GraphQLString },
        fcToken  :{ type: graphql.GraphQLString },
        fcExpiresIn  :{ type: graphql.GraphQLString },



        message: { type: graphql.GraphQLString },
    }
});

exports.userType =userType;