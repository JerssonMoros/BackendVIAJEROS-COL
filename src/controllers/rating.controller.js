const Ratings = require('../models/rating.model.js');

const getRatings = async (req, res) => {
    try {
        const datosRest = await Ratings.find({}).populate('restaurantID')
        const datosUser = await Ratings.find({}).populate('userID', 'username email')
            console.log(datosRest, datosUser);
            res.status(200).json({ datosRest, datosUser});
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

const postRating = async (req, res) => {
    try {
        const { quality, price, customerService, comments, restaurantID, userID } = req.body;

        const data = {
            quality,
            price,
            customerService,
            comments,
            restaurantID,
            userID
        };

        const newRating = new Ratings(data);
        const savedRating = await newRating.save();

        res.status(201).json({
            ok: true,
            msg: 'Calificación creada con éxito.',
            rating: savedRating
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error al guardar la calificación' });
    }
};

const putRating = async (req, res) => {
    try {
        const { id } = req.params;
        const { quality, price, customerService, comments, restaurantID, userID } = req.body;

        const updatedData = {
            quality,
            price,
            customerService,
            comments,
            restaurantID,
            userID
        };

        const updatedRating = await Ratings.findByIdAndUpdate(id, updatedData, { new: true, runValidators: true });

        if (!updatedRating) {
            return res.status(404).json({ error: 'Calificación no encontrada' });
        }

        res.status(200).json({
            ok: true,
            msg: 'Calificación actualizada con éxito.',
            rating: updatedRating
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error al actualizar la calificación' });
    }
};

const deleteRating = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedRating = await Ratings.findByIdAndDelete(id);

        if (!deletedRating) {
            return res.status(404).json({ error: 'Calificación no encontrada' });
        }

        res.status(200).json({
            ok: true,
            msg: 'Calificación eliminada con éxito.',
            rating: deletedRating
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error al eliminar la calificación' });
    }
};
const ratingById = async( req, res) => {
    try { 
        const {restaurantID} = req.params;
        const restaurante = await Ratings.find({restaurantID: restaurantID})
        console.log(restaurante)
        
        return res.status(200).json({
            ok: true,
           restaurante         
        });
    }catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            errors: ['Error en el servidor']
        })
    }
}

module.exports = {
    getRatings,
    postRating,
    putRating,
    deleteRating,
    ratingById
};
