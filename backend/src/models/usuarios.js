const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    nombres: {type: String, required: true},
    apellidos: {type: String, required: true},
    documento: {type: String, required: true},
    celular: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
});

module.exports = mongoose.model('Usuario', UserSchema);