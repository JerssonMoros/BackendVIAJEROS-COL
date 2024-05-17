// const { Router } = require('express');

// const router = Router();

// router.get('/', controlador)

// module.exports = router;
const { postLogin } = require('../controllers/auth.controller.js');
const { Router } = require('express');

const router = Router();

router.post('/', postLogin)

module.exports = router;

