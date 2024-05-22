const { Schema, model } = require('mongoose');

const RestauranteSchema = Schema({
     //Defino mis atrubutos del esquema.
     nombre_restaurante: {
          type: String,
          required: true,
     },
     ubicacion: {
          type: String,
          required: true,
     },
     categoria: {
          type: String,
          required: true,
     },
     descripcion: {
          type: String,
          required: true,
     },
     fotografias: {
          type: String,
          required: true,
     },
     horario: {
          type: String,
          required: true,
     },
     id_usuario: {
          type: Schema.Types.ObjectId,
          ref: 'User',
          required: true,
     }
})

module.exports = model('Restaurant', RestauranteSchema)