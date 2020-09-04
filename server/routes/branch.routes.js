const express = require('express');
const branchjCtrl = require('../controllers/branchCtrl');

const router = express.Router();

router.get('/', branchjCtrl.getAll);
router.post('/', branchjCtrl.create);
router.put('/', branchjCtrl.update);
router.delete('/:id', branchjCtrl.delete);

module.exports = router;