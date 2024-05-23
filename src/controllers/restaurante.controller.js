const Restaurant = require("../models/restaurant.model.js");

const verRestaurante = async (req, res) => {
    const users = await Restaurant.find().populate('nombre_restaurante', 'ubicacion', 'categoria', 'descripcion', 'fotografias', 'horario','id_usuario');
    return res.json({
        ok: "ok",
        data: restaurante,
    });
};
const ingresarRestaurante = (req, res) => {
    try {
        const {nombre_restaurante, ubicacion, categoria, descripcion, fotografias, horario,id_usuario,} = req.body;
        const data = {nombre_restaurante, ubicacion, categoria, descripcion, fotografias, horario, id_usuario,};
        const restaurante = new Restaurant(data);
        restaurante.save();
        return res.status(201).json({
            ok: true,
            msg: "Creacion con exito.",
            restaurante,
        });
    } catch (error) {
        console.log(error);
        if (error.code === 11000) {
            // El código 11000 es el código de error de duplicado en MongoDB
            res.status(400).send({ error: "" });
        } else {
            // Manejar otros posibles errores
            res.status(500).send({ error: "" });
        }
    }
};

const actualizarRestaurante = (req, res) => {
    try {
        const {id} = req.params;
        const {newNombre_restaurante,
            newUbicacion,
            newCategoria,
            newDescripcion,
            newFotografias,
            newHorario,
            newId_usuario,
            newMenus,
            newCalificacion,
        } = req.body;
        const restaurantId = parseInt(id);
        const restaurant = restaurantes.find(
            (restaurantes) => restaurant.id === restaurantId
        );
        if (restaurant) {
            restaurantes.nombre_restaurante = newNombre_restaurante;
            restaurantes.ubicacion = newUbicacion;
            restaurantes.categoria = newCategoria;
            restaurantes.descripcion = newDescripcion;
            restaurantes.fotografias = newFotografias;
            restaurantes.horario = newHorario;
            restaurantes.id_usuario = newId_usuario;
            restaurantes.menus = newMenus;
            restaurantes.calificacion = newCalificacion;
            res.json({ message: `Restaurante ${id_restaurante} actualizado` });
        } else {
            res
                .status(404)
                .json({ message: `Restaurante ${id_restaurante} no encontrado` });
        }
        console.log(restaurantes);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            errors: ["Error en el servidor"],
        });
    }
};
const borrarRestaurante = async( req, res) => {
    try {
        const {id} = req.params;
        let restaurante = await Restaurant.findById(id);

        if(!restaurante){
            return res.status(400).json({
                ok: `No existe un restaurante con id ${id}`,
                ok: false 
            })
        }

        restaurante = await Restaurant.findByIdAndUpdate(id, {state: false});

        return res.status(400).json({
            ok: 'User deleted',
            ok: true,
        })

    }catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            errors: ['Error en el servidor']
        })
    }
}

module.exports = {
    verRestaurante,
    ingresarRestaurante,
    actualizarRestaurante,
    borrarRestaurante
};
