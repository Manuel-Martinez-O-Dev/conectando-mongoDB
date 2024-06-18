const mongoose = require('mongoose');

const esquemaUsuarios = new mongoose.Schema({
  nombre: String,
  edad: String
});

const modeloUsuario = mongoose.model('modeloUsuario', esquemaUsuarios);

module.exports = modeloUsuario;