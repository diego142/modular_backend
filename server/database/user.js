const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema({
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    age: { type: Number, required: true },
    code: { type: String, required: true },
    career: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    permission: { type: Number, required: true },
    active: { type: Boolean, required: true }
});

module.exports = mongoose.model('User', UserSchema);