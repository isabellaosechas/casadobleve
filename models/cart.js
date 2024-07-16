const mongoose = require('mongoose');
const cartSchema = new mongoose.Schema({
    products:[{
        qy: Number,
        productId: {
            type: mongoose.Schema.Types.ObjectId, ref: 'Product',
        }
    }],
    user:{
        type: mongoose.Schema.Types.ObjectId, ref: 'User',
        required: false
    },
    pago:{
        type: Boolean,
        default: false
    } 
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;