const mongoose = require('mongoose');

const { Schema } = mongoose;

const BranchSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: false},
});

module.exports = mongoose.model('Branch', BranchSchema);