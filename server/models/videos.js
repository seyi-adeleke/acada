var mongoose = require( 'mongoose' );
var Schema = mongoose.Schema;

var requiredStringValidator = [
    function (val) {
        var testVal = val.trim();
        return (testVal.length > 0)
    },
    // Custom error text...
    '{PATH} cannot be empty' ];

var videoSchema = new Schema({
    member:{type: String},
    title: {
        type: String,
        required: true,
        validate: requiredStringValidator },
    link: {
        type: String,
        required: true,
        validate: requiredStringValidator },
    description:{
        type: String,
        required: true,
        validate: requiredStringValidator
    },
    tags: {
        type: String,
        required: true,
        validate: requiredStringValidator },
    createdOn: { type: Date,
        default: Date.now }
});

module.exports = mongoose.model( 'Video', videoSchema );
