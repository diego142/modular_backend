const mongoose = require('mongoose');

const { Schema } = mongoose;

const TagSchema = new Schema({
    question: { type: Schema.Types.ObjectId, ref: 'Question' },
    tags: [
        { type: Schema.Types.ObjectId, ref: 'Branch' }
    ]
});

module.exports = mongoose.model('Tag', TagSchema);