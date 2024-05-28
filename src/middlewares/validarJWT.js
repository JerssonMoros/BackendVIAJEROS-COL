const jwt = require('jsonwebtoken')
const Users = require('../models/users.model')
const validarJWT = async (req, res, next) => {
    try {
        //Se obtiene el token que debe de venir en el HEADER
        const token = req.header('x-token'); 
        
        //Si no hay token se genera un error
        if (!token) throw new Error('No hay token en la peticion!')
        
        //Se el token existe se valida que el token sea valido.
        const { id } = jwt.verify(token, "!=PQii;H7;YH6PnM1~LQ(d3MYBDkBq")

        // Obtener el usuario que se encontro en el token
        const user = await Users.findById(id)

        //Se verifica que el usuario dentro del token exista
        if ( !user ) throw new Error('Token no valido - No existe el user')

        //Se verifica si el usuario esta activo
        // if ( !user.state ) throw new Error('Token no valido - user desactivado')

        req.user = user;
        next();
        
    } catch (error) {
        console.log(error);
        return res.status(401).json({
            ok: false,
            errors: [error.message] 
        })
    }
}

module.exports = validarJWT