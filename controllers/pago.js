const pagoRouter = require('express').Router();
const Pago = require('../models/pago');

// Agregar eventos
pagoRouter.post('/', async (request, response) => {
    const { user, banco, telefono, ref, fecha, order, status } = request.body;

    if (!banco || !telefono || !ref || !fecha || !order) {
        return response.status(400).json({ error: 'Todos los campos son requeridos' });
    }

    const newPago = new Pago({
      user,
        banco,
        telefono,
        ref,
        fecha,
        order,
    })
    const savedPago = await newPago.save();
    return response.status(201).json(savedPago);

});

//Pedir pagos

pagoRouter.get('/', async (request, response) => {
    const pagos = await Pago.find({});
    return response.status(201).json(pagos);
});

//Pedir 1 pago
pagoRouter.get('/:id', async (request, response) => {
    const pagoId = request.params.id;
  
    try {
      const pago = await Pago.findById(pagoId).populate('order');
      if (pago) {
        return response.json(pago); 
      } else {
        return response.status(404).send('Pago not found');
      }
    } catch (error) {
      console.error(error);
      return response.status(500).send('Internal Server Error');
    }
  });
  ;
//Actualizar/editar

pagoRouter.patch('/:id', async (request, response) => {
    const updateParams = {
        status: request.body.status,
    }
    const updatedPago = await Pago.findByIdAndUpdate(request.params.id, updateParams, { new: true });
    if (!updatedPago) {
        return response.status(500).json({ error: 'No se ha podido actualizar' });
    }
    return response.status(201).json(updatedPago)
});

module.exports = pagoRouter;