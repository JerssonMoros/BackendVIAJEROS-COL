const { Router } = require('express');
const { ingresarRestaurante, verRestaurante, restaurantById } = require('../controllers/restaurante.controller.js');
const router = Router();

router.get('/', verRestaurante)

router.post('/', ingresarRestaurante)
router.get('/:id', restaurantById)

module.exports = router;