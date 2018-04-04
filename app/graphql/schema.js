var  buildSchema  = require('graphql').buildSchema;



exports.schema  = buildSchema(`
    type Query {

        branch : Branch
        branchs : [Branch]
        company : Company
        companys : [Company]
        business : Business
        businesses : [Business]
        booking : Booking
    },
    type Branch {
        branch_id: Int
        name: String
    },
    type Company {
        company_id: Int
        name: String
        title: String
        detail: String
    },
    type Business {
        category_id: Int
        name: String
    },

`);




exports.root = {
    // ...require('./branch/branch').branch,
     ...require('./company/company').company,
    // ...require('./business/business').business,

};

