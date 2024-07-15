const mongoose = require('mongoose');
const eventSchema = new mongoose.Schema({
    name: String,
    date: String,
    price: String,
    cupos: String,
    place: String,
    image: String,
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;