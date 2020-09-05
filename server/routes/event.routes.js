const express = require('express');
const eventCtrl = require('../controllers/eventCtrl');

const router = express.Router();

router.get('/', eventCtrl.getAll);
router.get('/:id', eventCtrl.getById);
router.get('/user/:id', eventCtrl.getByUserId);
router.post('/', eventCtrl.create);
router.put('/', eventCtrl.update);
router.delete('/:id', eventCtrl.close);

module.exports = router;