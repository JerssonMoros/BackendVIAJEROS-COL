
const { Schema, model } = require('mongoose');

const menuSchema = Schema({
    //atributos del esquema.
    nombrePlato: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    descripcion: {
        type: String,
        required: true,
        trim: true, 
        lowercase: true 
    },
    precio : {
        type: Number,
        required: true
    },
    ingredientes : {
        type: String,
        required: true
    },
    idRestaurante : {
        type: Number,
        required: true
    }
});

module.exports = model( 'Menus', userSchema )