const { Router } = require('express');
const { ingresarRestaurante } = require('../controllers/restaurante.controller.js');
const router = Router();

// router.get('/', getRestaurant)

router.post('/', ingresarRestaurante)

module.exports = router;