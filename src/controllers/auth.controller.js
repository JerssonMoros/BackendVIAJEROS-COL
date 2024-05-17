const bcryptjs = require('bcryptjs');
const Users = require('../models/users.model.js')
const generateJWT = require('../functions/generateJWT.js');
// const postLogin = ( req, res ) => {
//     return 
// }

// module.exports = {
//     postLogin
// }

const postLogin = async ( req, res ) => {
    try {

        const { email, password } = req.body;
        //Consultar si el correo existe
        const user = await Users.findOne({
            email
        })

        if ( !user ) throw new Error('No existe el correo.')
        
        const validatePass = bcryptjs.compareSync( password, user.password );
        if ( !validatePass ) throw new Error('La contrasena no coincide.');

        const token = await generateJWT(user);


        return res.status(200).json({
            ok: true,
            msg: 'Se va a loguear',
            token
        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).send({ 
            error: 'Error interno del servidor' 
        });
    }
}

module.exports = {
    postLogin
}