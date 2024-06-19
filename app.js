const mongoose = require('mongoose');
// const modeloUsuario = require('./modelos/usuarios');

const database = 'mongodb://127.0.0.1:27017/prueba';
// const database = 'mongodb+srv://admin_manuel:admin_del_server@cluster0.mjxwsdo.mongodb.net/prueba?retryWrites=true&w=majority&appName=Cluster0';


mongoose.connect(database)
  .then(() => {
    console.log('>>> CONECTADO a MongoDB');
  })
  .catch(err => {
    console.log('Error al conectar a mongoDB', err);
  });

// practicando la conexion de la base de datos

function insert(nombre, edad){
  const esquema = new mongoose.Schema({
    nombre: String,
    edad: Number
  });

  const modelo = mongoose.model('datos', esquema);

  const nuevo = new modelo({
    nombre: nombre,
    edad: edad
  });

  nuevo.save()
    .then(user => console.log(user))
    .catch(err => err);
}


function find() {
  const esquema = new mongoose.Schema({});
  const modelo = mongoose.model('datos', esquema);

  modelo.find()
    .then(users => console.log(users))
    .catch(err => console.log(err))
}


function update(buscarPorNombre, dato) {
  const esquema = new mongoose.Schema({
    nombre: String,
    edad: Number,
    activo: Boolean
  });
  const modelo = mongoose.model('datos', esquema);
  modelo.updateOne({nombre: buscarPorNombre}, {$set: {activo: dato}})
    .then( update => console.log('actualizado con exito', update))
    .catch(err => console.log(err));
}


function eliminar(objeto) {
  const esquema = new mongoose.Schema({});
  const modelo = mongoose.model('datos', esquema);

  modelo.deleteOne(objeto)
    .then(() => console.log(`eliminado con exito`))
    .catch(err => console.log(err))
}

find()





// segunda parte

// const nuevoUsuario = new modeloUsuario({
//   nombre: 'manuel el grande',
//   edad: '40'
// });

// nuevoUsuario.save()
//   .then(user => {
//     console.log('usuario guardado: ', user);
//   })
//   .catch(err => {
//     console.log('Error al guardar usuario: ', err);
//   });