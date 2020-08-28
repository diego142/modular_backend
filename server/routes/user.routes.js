const express = require('express');
const userCtrl = require('../controllers/userCtrl');

const router = express.Router();

router.get('/', userCtrl.getAll);
router.get('/:email', userCtrl.getByEmail);
router.post('/', userCtrl.create);
router.delete('/:id', userCtrl.delete);

module.exports = router;