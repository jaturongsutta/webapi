var mongoose = require('mongoose')
var Schema = mongoose.Schema

var BookingSchema = new Schema({
    contentId : String,
    //date: { type: Date, default: Date.now },
    date: { type: Date },
    amount : Number,
})


mongoose.model('Booking',BookingSchema)
