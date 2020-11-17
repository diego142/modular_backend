const express = require('express');
const userCtrl = require('../controllers/userCtrl');

const router = express.Router();

router.get('/', userCtrl.getAll);
router.get('/:email', userCtrl.getByEmail);
router.get('/lostpass/:email', userCtrl.lostPass);
router.get('/id/:id', userCtrl.getById);
router.put('/', userCtrl.update);
router.put('/permission', userCtrl.updatePermission);
router.post('/', userCtrl.create);
router.delete('/:id', userCtrl.delete);

module.exports = router;