const { userType } = require('./userType')
var graphql = require('graphql');

require('../../models/user.model')
var User = require('mongoose').model('User')
var query = {
    user: {
        type: userType,
        args: {
            id: { type: graphql.GraphQLString }
        },
        resolve: async function (_, { id }) {
            var data = await User.findOne({ _id: id });
            return data;
        }
    },
    userByFB: {
        type: userType,
        args: {
            fcUserId: { type: graphql.GraphQLString }
        },
        resolve: async function (_, { fcUserId }) {
            var data = await User.findOne({ fcUserId: fcUserId });
            return data;
        }
    },
};


var mutation = {
    userLoginFacebook: {
        type: userType,
        args: {
            firstName: { type: graphql.GraphQLString },
            lastName: { type: graphql.GraphQLString },
            username: { type: graphql.GraphQLString },
            email: { type: graphql.GraphQLString },
            provider: { type: graphql.GraphQLString },
            picture: { type: graphql.GraphQLString },
            gmcToken: { type: graphql.GraphQLString },
            fcUserId: { type: graphql.GraphQLString },
            fcToken: { type: graphql.GraphQLString },
            fcExpiresIn: { type: graphql.GraphQLString },

        },
        resolve: async function (_, { firstName, lastName, username, email, provider, picture, gmcToken, fcUserId, fcToken, fcExpiresIn }) {
            // var date = Date.now()
            var jsonData = { firstName, lastName, username, email, provider, picture, gmcToken, fcUserId, fcToken, fcExpiresIn }
            jsonData.createDate = Date.now();
           
            var userData = await User.findOne({ fcUserId: jsonData.fcUserId });

            if(userData == null){      
                var user = new User(jsonData)
                var data = await user.save();
                data.message = "Create Success";
            }
            else{
                userData.fcToken = fcToken;
                userData.fcExpiresIn = fcExpiresIn;
                userData.picture = picture;
                userData.firstName = firstName;
                userData.lastName = lastName;
                userData.updateDate = Date.now();
                var data = await User.findOneAndUpdate({ fcUserId: jsonData.fcUserId }, userData)
                data.message = "Update Success";
            }
            return data;
        }
    },

};


exports.query = query;
exports.mutation = mutation;