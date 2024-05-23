const { Router } = require('express');
const { check } = require('express-validator');
const { getMenus, postMenu } = require('../controllers/menu.controller.js');
const validateError = require('../middlewares/validateErrors.js');
const router = Router();

router.get('/', getMenus)

router.post('/', [
    check('url_picture', 'La ruta de la imagen es obligatorio.').not().isEmpty(),
    check('name_dish', 'El nombre del plato es requerido.').not().isEmpty(),
    check('description', 'La descripción es requerida.').not().isEmpty(),
    check('price', 'Se debe definir el precio.').not().isEmpty(),
    check('ingredients', 'Indique los ingredientes.').not().isEmpty(),
    check('id_restaurant', 'El id_restaurante es requerido.').not().isEmpty(),
    validateError
], postMenu)

module.exports = router;
