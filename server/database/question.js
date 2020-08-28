const mongoose = require('mongoose');

const { Schema } = mongoose;

const QuestionSchema = new Schema({
    title: { type: String, required: true },
    body: { type: String, required: true },
    date: { type: Date, required: true },
    open: { type: Boolean, required: true },
    reply: [
        {
            user_id: { type: Schema.Types.ObjectId, ref: 'User' },
            date: { type: Date, required: true },
            reply: { type: String, required: true },
            score: { type: Number, required: true }
        }
    ]
});

module.exports = mongoose.model('Question', QuestionSchema);