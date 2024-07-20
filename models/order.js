const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    products:[{
        products: {
            type: mongoose.Schema.Types.ObjectId, ref: 'Product',
        }
    }],
    user:{
        type: mongoose.Schema.Types.ObjectId, ref: 'User',
        required: false
    },
    total:{
        type: Number
    },
    pago:{
        type: Boolean,
        default: false
    }
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;