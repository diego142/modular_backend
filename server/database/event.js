const mongoose = require('mongoose');

const { Schema } = mongoose;

const EventSchema = new Schema({
    title: { type: String, required: true },
    body: { type: String, required: true },
    date: { type: Date, required: true },
    open: { type: Boolean, required: true }
});

module.exports = mongoose.model('Event', EventSchema);