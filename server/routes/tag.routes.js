const express = require('express');
const tagCtrl = require('../controllers/tagCtrl');

const router = express.Router();

router.get('/', tagCtrl.getAll);
router.get('/:id', tagCtrl.getByQuestionId);
router.post('/', tagCtrl.create);
router.put('/:id/:id_tag', tagCtrl.addTag); // id del registro // id_tag del tag que se va a agregar
router.put('/', tagCtrl.update);
router.delete('/:id/:id_tag', tagCtrl.removeTag); // id del registro // id_tag del tag que se va a eliminar

module.exports = router;