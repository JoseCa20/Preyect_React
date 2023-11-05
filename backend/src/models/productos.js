const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductSchema = new Schema({
    nombre: {type: String, required: true},
    descripcion: {type: String, required: true},
    precio: {type: Number, required: true},
});

module.exports = mongoose.model('Producto', ProductSchema);