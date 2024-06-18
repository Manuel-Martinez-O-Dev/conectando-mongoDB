const mongoose = require('mongoose');
const modeloUsuario = require('./modelos/usuarios');

// const database = 'mongodb://127.0.0.1:27017/prueba';
const database = 'mongodb+srv://admin_manuel:admin_del_server@cluster0.mjxwsdo.mongodb.net/prueba?retryWrites=true&w=majority&appName=Cluster0';


mongoose.connect(database)
  .then(() => {
    console.log('>>> CONECTADO a MongoDB');
  })
  .catch(err => {
    console.log('Error al conectar a mongoDB', err);
  });

// segunda parte

const nuevoUsuario = new modeloUsuario({
  nombre: 'manuel el grande',
  edad: '40'
});

nuevoUsuario.save()
  .then(user => {
    console.log('usuario guardado: ', user);
  })
  .catch(err => {
    console.log('Error al guardar usuario: ', err);
  });