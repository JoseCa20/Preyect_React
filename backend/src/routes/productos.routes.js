const express = require('express');
const router = express.Router();
const Producto = require('../models/productos');

router.get('/admin/productos', async(req, res) => {
    const productos = await Producto.find();
    console.log(productos);
    res.json(productos);
});

router.get('/admin/productos/:id', async(req, res) => {
    const producto = await Producto.findById(req.params.id);
    res.json(producto);
});

router.post('/admin/productos', async(req, res) => {
    const { nombre, descripcion, precio } = req.body;
    const producto = new Producto({ nombre, descripcion, precio });
    await producto.save();
    res.json({ status: 'Producto guardado'});
});

router.put('/admin/productos/:id', async(req, res) => {
    const { nombre, descripcion, precio } = req.body;
    const actualizarProducto = { nombre, descripcion, precio };
    await Producto.findByIdAndUpdate(req.params.id, actualizarProducto);
    res.json({ status: 'Producto actualizado'});
});

router.delete('/admin/productos/:id', async(req, res) => {
    await Producto.findByIdAndRemove(req.params.id);
});

module.exports = router;