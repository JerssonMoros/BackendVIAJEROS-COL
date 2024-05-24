const { Schema, model } = require('mongoose');

const RolsSchema = Schema({

    name: {
        type: String,
        required: true,

    }


})

module.exports = model( 'Rols', RolsSchema )