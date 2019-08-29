var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
    product_id: Number,
    title: String,
    description: String,
    price: Number,
    image: String
});


module.exports = mongoose.model('Product', productSchema);