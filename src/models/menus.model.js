
const { Schema, model } = require('mongoose');

const menuSchema = Schema({
    //atributos del esquema.
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
    id_restaurant : {
        type: Schema.Types.objectId,
        ref:'Restaurant',
        required: true,
    }
});

module.exports = model( 'Menus', menuSchema )