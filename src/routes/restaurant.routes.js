const { Router } = require('express');
const { getRestaurant, postRestaurant } = require('../controllers/restaurante.controller.js');
const router = Router();

router.get('/', getRestaurant)

router.post('/', postRestaurant)

module.exports = router;