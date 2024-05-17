const bcryptjs = require('bcryptjs');
const Users = require('../models/users.model.js')

const getUsers = (req, res) => {
    res.send('Se van a listar los usarios desde el controlador')
}

const postUser = (req, res) => {

    try {
        const { name, email, password } = req.body;

            const data = {
                name,
                email
            }

            //Encriptar contrasena
            const encriptedPass = bcryptjs.genSaltSync();
            data.password = bcryptjs.hashSync(password, encriptedPass);
            
            const user = new Users( data );
            // user.save();

            return res.status(201).json({
                ok: true,
                msg: 'Creacion con exito.',
                user
            })

    } catch (error) {
        console.log(error);
        if (error.code === 11000) {
            // El código 11000 es el código de error de duplicado en MongoDB
            res.status(400).send({ error: 'El correo ya existe' });
          } else {
            // Manejar otros posibles errores
            res.status(500).send({ error: 'Error interno del servidor' });
          }
    }

    // res.send('Se va a crear un usario desde el controlador')
}

module.exports = {
    getUsers,
    postUser
}