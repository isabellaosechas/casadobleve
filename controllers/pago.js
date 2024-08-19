const pagoRouter = require('express').Router();
const Pago = require('../models/pago');

// Agregar eventos
pagoRouter.post('/', async (request, response) => {
    const { banco, telefono, ref, fecha, order, status } = request.body;

    if (!banco || !telefono || !ref || !fecha || !order || !status) {
        return response.status(400).json({ error: 'Todos los campos son requeridos' });
    }
    const newPago = new Pago({
        banco,
        telefono,
        ref,
        fecha,
        order,
        status
    })
    const savedPago = await newPago.save();
    return response.status(201).json(savedPago);

});

module.exports = pagoRouter;