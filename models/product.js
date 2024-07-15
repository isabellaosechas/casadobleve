
const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    name: String,
    price: String,
    description: String,
    stock: String,
    image: String,
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;