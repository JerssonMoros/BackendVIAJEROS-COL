const { Router } = require('express');
const { check } = require('express-validator');
const { getRatings, postRating } = require('../controllers/rating.controller.js');
const validateError = require('../middlewares/validateErrors.js');

const router = Router();

//  obtener todas las calificaciones
router.get('/', getRatings);

//   crear una nueva calificación
router.post('/', [
    check('quality', 'La calidad es obligatoria').not().isEmpty(),
    check('price', 'El precio es obligatorio').isNumeric(),
    check('customerService', 'El servicio al cliente es obligatorio').not().isEmpty(),
    check('comments', 'Los comentarios son obligatorios').not().isEmpty(),
    check('restaurantID', 'El ID del restaurante es obligatorio').not().isEmpty(),
    check('userID', 'El ID del usuario es obligatorio').not().isEmpty(),
     // Middleware para manejar errores de validación
    validateError
], postRating);

router.put('/:id', )

module.exports = router;