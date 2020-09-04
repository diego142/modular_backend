const mongoose = require('mongoose');

const { Schema } = mongoose;

const SkillSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    skills: [
        { type: Schema.Types.ObjectId, ref: 'Branch' }
    ]
});

module.exports = mongoose.model('Skill', SkillSchema);