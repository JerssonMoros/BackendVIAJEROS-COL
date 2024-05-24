const Menus = require('../models/menus.model.js')

const getMenus = async ( req = request, res = response) => {
    //const menus = await Menus.find().populate('id_restaurant');
    const menus = await Menus.find();
    return res.json({
        ok: 'ok',
        data: menus})
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

}

const deleteMenu = async (req = request, res = response) => {
    try {
        const { id } = req.params;
        console.log("id"+id);

        const menu = await Menus.findByIdAndDelete(id);


        if (!menu) {
            return res.status(404).json({
                ok: false,
                msg: 'Menú no encontrado'
            });
        }

        return res.json({
            ok: true,
            msg: 'Menú eliminado con éxito',
            menu
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: 'Error interno del servidor' });
    }
};

const patchMenu = async (req = request, res = response) => {
    try {
        const { id } = req.params;
        const { description, price } = req.body;

        const menu = await Menus.findByIdAndUpdate(
            id,
            { description, price },
            { new: true } // Esto devuelve el documento actualizado
        );

        if (!menu) {
            return res.status(404).json({
                ok: false,
                msg: 'Menú no encontrado'
            });
        }

        return res.json({
            ok: true,
            msg: 'Menú actualizado con éxito',
            menu
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: 'Error interno del servidor' });
    }
};



module.exports = {
    getMenus,
    postMenu,
    deleteMenu,
    patchMenu
}