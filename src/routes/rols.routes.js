const { Router } = require('express');
const router = Router();
const { getIDRols, postRols, putRols, deleteRols } = require('../controllers/rols.controller.js');

router.get('/', getIDRols) 

router.post('/',postRols)

router.put('/:id', putRols)

router.delete('/:id', deleteRols)

module.exports = router;