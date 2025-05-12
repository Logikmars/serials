const { Schema, model } = require('mongoose');

const storySchema = new Schema({
    // meows: String,
    // gavs: Number,
}, { timestamps: true });

module.exports = model('Story', storySchema);