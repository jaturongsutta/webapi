var mongoose = require('mongoose')
var Schema = mongoose.Schema
var crypto = require('crypto')
var UserSchema = new Schema({
    firstName : String,
    lastName : String,
    username : {
        type: String,
        unique : true,
        required : 'User is required',
        trim : true
    },
    password : {
        type : String,
    },
    salt : String,
    provider : {
        type : String,
        required : "Provider is required"
    },
    providerId : String,
    providerData:{

    },
})



UserSchema.pre('save',function(next){
    if(this.password){
        //console.log('password ' +this.password)
        
        this.salt = new Buffer(crypto.randomBytes(16).toString('base64'), 'base64');
         //console.log('salt ' +this.salt)

        this.password = this.hashPassword(this.password)

        //console.log('password hash ' + this.password)
    }
    next()
})


UserSchema.methods.hashPassword = function(password){
    return crypto.pbkdf2Sync(password, this.salt, 10000, 64, 'sha256').toString('base64');
}

UserSchema.methods.authenticate = function(password){
    return this.password === this.hashPassword(password)
}


mongoose.model('User',UserSchema)

