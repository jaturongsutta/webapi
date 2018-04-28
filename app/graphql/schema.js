var  buildSchema  = require('graphql').buildSchema;
var graphql = require('graphql');


// exports.schema  = buildSchema(`
//     type Query {

//         branch : Branch
//         branchs : [Branch]
//         company : Company
//         companys : [Company]
//         business : Business
//         businesses : [Business]
//         content : Content
//         contents : [Content]
//     },
//     type Branch {
//         branch_id: Int
//         name: String
//     },
//     type Company {
//         company_id: Int
//         name: String
//         title: String
//         detail: String
//     },
//     type Business {
//         category_id: Int
//         name: String
//     },
//     type Content {
//         id: String
//         title: String
//         detail: String
//         page: String
//         group: String
//         img: String
//     },
// `);




// exports.root = {
//      ...require('./content').content,
//      ...require('./company').company,
//     // ...require('./business/business').business,

// };



// Define the User type
var c = new graphql.GraphQLObjectType({
    name: 'User',
    fields: {
      id: { type: graphql.GraphQLString },
      name: { type: graphql.GraphQLString },
    }
  });

// Define the Query type
var queryType = new graphql.GraphQLObjectType({
    name: 'Query',
    fields: {
      ...require('./company/company').query,
      ...require('./content/content').query,
      ...require('./user/user').query,
     
      
    }
  });

  var mutationType = new graphql.GraphQLObjectType({
    name: 'Mutation',
    fields: {
      ...require('./booking/booking').mutation,
      ...require('./user/user').mutation,
      
    }
  });

  

exports.schema =  new graphql.GraphQLSchema({
  query: queryType,
  mutation : mutationType,
});
