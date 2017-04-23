var  mongoose  = require("mongoose");

var bcrypt = require('bcrypt-nodejs');

var userSchema = mongoose.Schema({
    firstName: String,
    email: String,
    password: String

});

userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};


// create the model for users and expose it to our app
module.exports = mongoose.model('users', userSchema);