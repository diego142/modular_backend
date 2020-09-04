const mongoose = require('mongoose');

const { Schema } = mongoose;

const QuestionSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    title: { type: String, required: true },
    body: { type: String, required: true },
    date: { type: Date, required: true },
    open: { type: Boolean, required: true },
    replys: [
        {
            user: { type: Schema.Types.ObjectId, ref: 'User' },
            date: { type: Date, required: true },
            reply: { type: String, required: true },
            score: { type: Number, required: true }
        }
    ]
});

module.exports = mongoose.model('Question', QuestionSchema);
