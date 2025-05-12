const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    email: String,
    password: String,
    isAdmin: Boolean,
    tickets: Number,
    subscriptionType: String,
    subscriptionEnd: Number,
    likedFilms: [String],

});

module.exports = model('User', userSchema);