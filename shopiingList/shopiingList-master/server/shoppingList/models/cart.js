var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var cartSchema = Schema({
    user_id: String,
    product_id: Number,
    qty: Number
});



module.exports = mongoose.model('Cart', cartSchema);
