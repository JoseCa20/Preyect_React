const express = require('express');
const router = express.Router();
const Usuario = require('../models/usuarios');

router.get('/logup/usuarios', async(req, res) => {
    const usuarios = await Usuario.find();
    console.log(usuarios);
    res.json(usuarios);
});

router.get('/logup/usuarios/:id', async(req, res) => {
    const usuario = await Usuario.findById(req.params.id);
    res.json(usuario);
});

router.post('/logup', async(req, res) => {
    const { nombres, apellidos, documento, celular, email, password } = req.body;
    const usuario = new Usuario({ nombres, apellidos, documento, celular, email, password });
    await usuario.save();
    res.json({ status: ' Usuario registrado'});
});

router.put('/logup/usuarios/:id', async(req, res) => {
    const { nombres, apellidos, documento, celular, email, password } = req.body;
    const actualizarProducto = { nombres, apellidos, documento, celular, email, password };
    await Usuario.findByIdAndUpdate(req.params.id, actualizarProducto);
    res.json({ status: 'Usuario actualizado'});
});

router.delete('/logup/usuarios/:id', async(req, res) => {
    await Usuario.findByIdAndRemove(req.params.id);
});

module.exports = router;