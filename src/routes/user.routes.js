const { Router } = require('express');
const { check } = require('express-validator');
const { getUsers, postUser } = require('../controllers/user.controller.js');
const validateError = require('../middlewares/validateErrors.js');
const router = Router();

router.get('/', getUsers)

router.post('/', [
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'La contrasena es obligatorio.').not().isEmpty(),
    check('email', 'El correo es obligatorio.').not().isEmpty(),
    check('email', 'El correo no es valido.').isEmail(),
    check('password', 'La contrasena requiere como minimo 6 caracteres').isLength({min: 6}),
    validateError
], postUser)

module.exports = router;

