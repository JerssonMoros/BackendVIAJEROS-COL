const { Router } = require('express');
const router = Router();
const getIDRols = require('../controllers/rols.controller.js');

router.get('/', getIDRols) 

router.delete('/:id', deleteRols)

router.post('/',postRols)

router.put('/:id',putRols)

module.exports = router;