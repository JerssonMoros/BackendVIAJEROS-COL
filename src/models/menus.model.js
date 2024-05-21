
const { Schema, model } = require('mongoose');

const menuSchema = Schema({
    //atributos del esquema.
    id_Menu : {
        type: Number,
        required: true,
        autoIncrement: true,
        startAt: 1,
        incrementBy: 1,
        unique: true
    },
    url_picture :{
        type: String,
        requerido: true
    },
    name_dish: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    description: {
        type: String,
        required: true,
        trim: true, 
        lowercase: true 
    },
    price : {
        type: Number,
        required: true
    },
    ingredients : {
        type: String,
        required: true
    },
    id_Restaurant : {
        type: Number,
        required: true
    }
});

module.exports = model( 'Menus', userSchema )