var  buildSchema  = require('graphql').buildSchema;



exports.schema  = buildSchema(`
    type Query {

        branch : Branch
        branchs : [Branch]
        company : Company
        companys : [Company]
        business : Business
        businesses : [Business]
        content : Content
        contents : [Content]
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
    type Content {
        id: String
        title: String
        detail: String
        page: String
        group: String
        img: String
    },
`);




exports.root = {
     ...require('./content').content,
     ...require('./company').company,
    // ...require('./business/business').business,

};

