const { Schema, model } = require('mongoose');

const filmSchema = new Schema({
    name: String,
    description: String,
    tags: [String],
    filmEpisodes: Number,
    filmEpisodesFree: Number,
    releaseIn: Number,//Если есть - то будет таймер до релиза
    additionalStatus: String,
    mediaFilePath: String,
    filmImage: String,
}, { timestamps: true });

module.exports = model('Film', filmSchema);