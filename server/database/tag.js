const mongoose = require('mongoose');

const { Schema } = mongoose;

const TagSchema = new Schema({
    question_id: { type: Schema.Types.ObjectId, ref: 'Question' },
    tag: [
        { type: String, required: false }
    ]
});

module.exports = mongoose.model('Tag', TagSchema);