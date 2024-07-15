const eventRouter = require('express').Router();
const Event = require('../models/events');

// Agregar eventos
eventRouter.post('/', async (request, response) => {
    const { name, date, price, cupos, place, image } = request.body;

    if (!name || !date || !price || !cupos || !place || !image) {
        return response.status(400).json({ error: 'Todos los campos son requeridos' });
    }
    const newEvent = new Event({
        name,
        date,
        price,
        cupos,
        place,
        image
    })
    const savedEvent = await newEvent.save();
    return response.status(201).json(savedEvent);

});

// Obtener todos los eventos
eventRouter.get('/', async (request, response) => {
    const eventList = await Event.find({});
    return response.status(201).json(eventList)
});

//Eliminar evento

eventRouter.delete('/:id', async (request, response) => {
    const deletedEvent = await Event.deleteOne({_id: request.params.id});
    if (!deletedEvent) {
        return response.status(500).json({ error: 'No se ha podido eliminar' });
    }
    return response.status(201).json('Evento ha sido eliminado')
});


module.exports = eventRouter;