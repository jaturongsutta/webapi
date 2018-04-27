var graphql = require('graphql');
const bookingType = new graphql.GraphQLObjectType({
    name: 'Booking',
    fields: {
        id: { type: graphql.GraphQLString },
        contentId: { type: graphql.GraphQLString },
        date: { type: graphql.GraphQLString },
        amount: { type: graphql.GraphQLFloat  },
        message: { type: graphql.GraphQLString },
    }
});

exports.bookingType = bookingType;