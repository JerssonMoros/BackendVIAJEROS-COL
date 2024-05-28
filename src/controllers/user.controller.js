const bcryptjs = require('bcryptjs');
const Users = require('../models/users.model.js')

const getUsers = async (req, res) => {
    console.log(req.user)
    const users = await Users.find();
    return res.json({
        ok: true,
        users
    })
}

const postUser = (req, res) => {

    try {
        const { name,
            last_name,
            email,
            number_phone,
            nationality,
            password,
            last_login,
            date_create 
        } = req.body;

            const data = {
                name,
                last_name,
                email,
                number_phone,
                nationality,
                password,
                last_login,
                date_create 
            }

            //Encriptar contrasena
            const encriptedPass = bcryptjs.genSaltSync();
            data.password = bcryptjs.hashSync(password, encriptedPass);
            
            const user = new Users( data );
            user.save();

            return res.status(201).json({
                ok: true,
                msg: 'Creacion con exito.',
                user
            })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            error
        })
    }
}

const putUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { password, ...newInfoUser } = req.body;

        if ( password ) {
            const encriptedPass = bcryptjs.genSaltSync();
            newInfoUser.password = bcryptjs.hashSync(password, encriptedPass);
        }

        const user = await Users.findByIdAndUpdate(id, newInfoUser);

        return res.status(200).json({
            ok: true,
            msg: 'Usuario actualizado con exito',
            user
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            error: 'Error en el servidor'
        })
    } 
}

const deleteUser = async ( req, res) => {
    try {
        const { id } = req.params;
        
        return res.status(200).json({
            ok: true,
            msg: 'Usuario eliminado con exito'
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            error: 'Error en el servidor'
        })
    }

    
}

module.exports = {
    getUsers,
    postUser,
    putUser,
    deleteUser
}