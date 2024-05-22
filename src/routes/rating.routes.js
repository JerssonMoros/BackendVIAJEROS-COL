const { Router } = require('express');
const { check } = require('express-validator');
const { getRatings, postRating } = require('../controllers/rating.controller.js');
const validateError = require('../middlewares/validateErrors.js');
const router = Router();

router.get('/', getRatings);

router.post('/', [
    check('quality', 'La calidad es obligatoria').not().isEmpty(),
    check('price', 'El precio es obligatorio').isNumeric(),
    check('customerService', 'El servicio al cliente es obligatorio').not().isEmpty(),
    check('comments', 'Los comentarios son obligatorios').not().isEmpty(),
    check('restaurantID', 'El ID del restaurante es obligatorio').not().isEmpty(),
    check('userID', 'El ID del usuario es obligatorio').not().isEmpty(),
    validateError
], postRating);

module.exports = router;
