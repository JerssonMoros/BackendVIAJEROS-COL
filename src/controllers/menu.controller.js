const bcryptjs = require('bcryptjs');
const Menus = require('../models/menus.model.js')

const getMenus = (req, res) => {
    res.send('Se van a listar los menus del Restaurante')
}

const postMenu = (req, res) => {

    try {
        const {url_picture,
               name_dish,
               description,
               price,
               ingredients,
               id_restaurant } = req.body;

            const data = {
                url_picture,
                name_dish,
                description,
                price,
                ingredients,
                id_restaurant 
            }

            //Encriptar contrasena
            //const encriptedPass = bcryptjs.genSaltSync();
            //data.password = bcryptjs.hashSync(password, encriptedPass);
            
            const menu = new Menus( data );
           
            menu.save();

            return res.status(201).json({
                ok: true,
                msg: 'Creacion Menú con exito.',
                menu
            })

    } catch (error) {
        console.log(error);
        if (error.code === 11000) {
            // El código 11000 es el código de error de duplicado en MongoDB
            res.status(400).send({ error: 'El menú ya existe' });
          } else {
            // Manejar otros posibles errores
            res.status(500).send({ error: 'Error interno del servidor' });
          }
    }

    // res.send('Se va a crear un usario desde el controlador')
}

module.exports = {
    getMenus,
    postMenu
}