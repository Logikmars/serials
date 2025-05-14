const { Schema, model } = require('mongoose');

const filmSchema = new Schema({
    name: String,
    description: String,
    tags: [String],
    episodesCount: Number,
    episodesCountFree: Number,
    releaseIn: Number,
    additionalStatus: String,
    mediaFilePath: String,
    previewUrl: String,
}, { timestamps: true });

module.exports = model('Film', filmSchema);