const { Schema, model } = require('mongoose');

const postSchema = new Schema({
    creator: String,
    text: String,
    likes: Number,
    comments: Number,
    createTime: Number
    // gavs: Number,
}, { timestamps: true });

module.exports = model('Post', postSchema);