const mongoose = require('mongoose');

const { Schema } = mongoose;

const EventSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    title: { type: String, required: true },
    body: { type: String, required: true },
    dateStart: { type: Date, required: true },
    dateEnd: { type: Date, required: true },
    open: { type: Boolean, required: true }
});

module.exports = mongoose.model('Event', EventSchema);