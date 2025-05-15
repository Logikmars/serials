const { Schema, model } = require('mongoose');

const filmHistorySchema = new Schema({
  filmId: { type: Schema.Types.ObjectId, ref: 'Film', required: false },
  action: { type: String, enum: ['created', 'updated', 'deleted'], required: true },
  timestamp: { type: Date, default: Date.now },
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: false },
  changes: Schema.Types.Mixed,

  mediaFilePath: { type: String, required: false },
  filmImage: { type: String, required: false },
});

module.exports = model('FilmHistory', filmHistorySchema);