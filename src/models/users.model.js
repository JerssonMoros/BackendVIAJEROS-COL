// const { Schema, model } = require('mongoose');

// const userSchema = Schema({
//     //Defino mis atrubutos del esquema.
// })

// module.exports = model( 'Users', userSchema )

const { Schema, model } = require('mongoose');

const userSchema = Schema({
    //Defino mis atrubutos del esquema.
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        trim: true, //Elimina los espacios al principio y al final del correo
        lowercase: true, //El correo lo pasa a minusculas
        unique: [true, 'El correo ya existe'] //Validar que el correo no exista
    },
    password: {
        type: String,
        required: true,
    }
})

module.exports = model( 'Users', userSchema )