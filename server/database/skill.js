const mongoose = require('mongoose');

const { Schema } = mongoose;

const SkillSchema = new Schema({
    user_id: { type: Schema.Types.ObjectId, ref: 'User' },
    skills: [
        { type: String, required: false }
    ]
});

module.exports = mongoose.model('Skill', SkillSchema);