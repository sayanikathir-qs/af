const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/userController');
router.post('/register', ctrl.register);
router.post('/login', ctrl.login);
router.get('/', ctrl.getAll);
router.put('/:id', ctrl.update);
router.delete('/:id', ctrl.remove);
module.exports = router;