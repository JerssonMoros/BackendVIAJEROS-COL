const { Router } = require('express');
const { getUsers, postUser } = require('../controllers/user.controller.js')
const router = Router();

router.get('/', getUsers)
router.post('/', postUser)

module.exports = router


