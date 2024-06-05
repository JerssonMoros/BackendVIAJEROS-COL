const { Router } = require('express');
const { ingresarRestaurante, verRestaurante } = require('../controllers/restaurante.controller.js');
const router = Router();

router.get('/', verRestaurante)

router.post('/', ingresarRestaurante)

module.exports = router;