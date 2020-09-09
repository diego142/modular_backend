const express = require('express');
const questionCtrl = require('../controllers/questionCtrl');

const router = express.Router();

router.get('/', questionCtrl.getAll);
router.get('/user/:id', questionCtrl.getByUserId);
router.get('/:id', questionCtrl.getById);
router.post('/', questionCtrl.create);
router.put('/', questionCtrl.update);
router.delete('/:id', questionCtrl.close);
router.put('/:id', questionCtrl.addReply); // id de la pregunta
router.put('/reply/:id', questionCtrl.modifyReply);
router.delete('/:id/:id_reply', questionCtrl.removeReply); // id de la pregunta // id_reply de la repuesta a modificar

module.exports = router;