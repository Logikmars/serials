const { Schema, model } = require('mongoose');

const commentSchema = new Schema({
    creator: String,
    text: String,
    likes: Number,
    replyTo: String,
    createTime: Number,
}, { timestamps: true });

module.exports = model('Comment', commentSchema);