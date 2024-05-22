const Restaurant = require('../models/restaurant.model.js')

const ingresarRestaurante = (req, res) => {
    try {
        const { nombre_restaurante, ubicacion, categoria, descripcion, fotografias, horario, id_usuario} = req.body;
        const data = { nombre_restaurante, ubicacion, categoria, descripcion, fotografias, horario, id_usuario}
        const restaurante = new Restaurant(data);
        restaurante.save();
        return res.status(201).json({
            ok: true,
            msg: 'Creacion con exito.',
            restaurante
        })
    } catch (error) {
        console.log(error);
        if (error.code === 11000) {
            // El código 11000 es el código de error de duplicado en MongoDB
            res.status(400).send({ error: '' });
        } else {
            // Manejar otros posibles errores
            res.status(500).send({ error: '' });
        }
    }

}

const actualizarRestaurante = (req, res) => {
    const { id_restaurante } = req.params;
    const { newNombre_restaurante, newUbicacion, newCategoria, newDescripcion, newFotografias, newHorario, newId_usuario, newMenus, newCalificacion } = req.body;
    const restaurantId = parseInt(id_restaurante);
    const restaurant = restaurantes.find(restaurantes => restaurant.id_restaurante === restaurantId);
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
        res.status(404).json({ message: `Restaurante ${id_restaurante} no encontrado` });
    }
    console.log(restaurantes);


}

module.exports = {
    ingresarRestaurante,
    actualizarRestaurante
}