const Ratings = require('../models/ratings.model.js');

const getRatings = (req, res) => {
    try {
      
        Ratings.find({}, (err, ratings) => {
            if (err) {
                return res.status(500).json({ error: 'Error interno del servidor' });
            }
            res.status(200).json({ ratings });
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: 'Error interno del servidor' });
    }
}

const postRating = (req, res) => {
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
        newRating.save((err, savedRating) => {
            if (err) {
                console.log(err);
                return res.status(500).json({ error: 'Error al guardar la calificación' });
            }
            return res.status(201).json({
                ok: true,
                msg: 'Calificación creada con éxito.',
                rating: savedRating
            });
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: 'Error interno del servidor' });
    }
}

module.exports = {
    getRatings,
    postRating
};
