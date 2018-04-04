var  buildSchema  = require('graphql').buildSchema;



exports.schema  = buildSchema(`
    type Query {
        course: Course
        courses(topic: String): [Course]
        branch : Branch
        branchs : [Branch]
        company : Company
        companys : [Company]
        business : Business
        businesses : [Business]
        booking : Booking
    },
    type Course {
        id: Int
        title: String
        author: String
        description: String
        topic: String
        url: String
    },
    type Branch {
        branch_id: Int
        name: String
    },
    type Company {
        company_id: Int
        name: String
    },
    type Business {
        category_id: Int
        name: String
    },
    type Booking {
        branchs: [Branch]
        companys : [Company]
        businesses :[Business]
    }
`);

var getCourse = function() { 
    return coursesData[0];
}
var getCourses = function(args) {
    if (args.topic) {
        var topic = args.topic;
        return coursesData.filter(course => course.topic === topic);
    } else {
        return coursesData;
    }
}


exports.root = {
    course: getCourse,
    courses: getCourses,
    // ...require('./branch/branch').branch,
    // ...require('./company/company').company,
    // ...require('./business/business').business,
    // ...require('./booking/booking').booking,
};



var coursesData = [
    {
        id: 1,
        title: 'The Complete Node.js Developer Course',
        author: 'Andrew Mead, Rob Percival',
        description: 'Learn Node.js by building real-world applications with Node, Express, MongoDB, Mocha, and more!',
        topic: 'Node.js',
        url: 'https://codingthesmartway.com/courses/nodejs/'
    },
    {
        id: 2,
        title: 'Node.js, Express & MongoDB Dev to Deployment',
        author: 'Brad Traversy',
        description: 'Learn by example building & deploying real-world Node.js applications from absolute scratch',
        topic: 'Node.js',
        url: 'https://codingthesmartway.com/courses/nodejs-express-mongodb/'
    },
    {
        id: 3,
        title: 'JavaScript: Understanding The Weird Parts',
        author: 'Anthony Alicea',
        description: 'An advanced JavaScript course for everyone! Scope, closures, prototypes, this, build your own framework, and more.',
        topic: 'JavaScript',
        url: 'https://codingthesmartway.com/courses/understand-javascript/'
    }
]
