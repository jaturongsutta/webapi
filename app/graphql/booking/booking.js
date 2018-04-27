const {bookingType} = require('./bookingType')
var graphql = require('graphql');

require('../../models/booking.model')
var Booking  = require('mongoose').model('Booking')
var query = {
    booking: {
        type: bookingType,
        args: {
            id: { type: graphql.GraphQLString }
        },
        resolve: async function (_, { id }) {
            var data = await Booking.findOne({_id : id});
            return data;
        }
    },
    bookings: {
        type: new graphql.GraphQLList(bookingType),
        resolve: async function () {
            var data = await Booking.find({});
            return data;
        }
    },
};


var mutation = {
    create: {
        type: bookingType,
        args: {
            contentId: { type: graphql.GraphQLString },
            date: { type: graphql.GraphQLString },
            amount: { type: graphql.GraphQLFloat },
        },
        resolve: async function (_, { contentId , amount }) {
            var date = Date.now()
            var jsonData = { contentId ,date , amount }

            var booking = new Booking(jsonData)
            var data = await booking.save();
            data.message =  "Save Success";
            return data;
        }
    },

};


exports.query = query;
exports.mutation = mutation;