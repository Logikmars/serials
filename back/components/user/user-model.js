const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    email: String,
    password: String,
    balance: {
        default: 50,
        type: Number
    },
});

module.exports = model('User', userSchema);