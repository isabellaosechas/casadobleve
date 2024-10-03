
const mongoose = require('mongoose');
const pagoSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Order',
    },
    banco: String,
    telefono: String,
    ref: String,
    fecha: String,
    order:{
        type: mongoose.Schema.Types.ObjectId, ref: 'Order',
    },
    status: {
        type: String,
        default: "pendiente"
    },
});

const Pago = mongoose.model('Pago', pagoSchema);

module.exports = Pago;