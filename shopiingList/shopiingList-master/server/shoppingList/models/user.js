var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var userSchema = Schema({
    username: String,
    password: String,
    email: String
});



module.exports = mongoose.model('User', userSchema);
