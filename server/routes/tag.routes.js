const express = require('express');
const tagCtrl = require('../controllers/tagCtrl');

const router = express.Router();

router.get('/', tagCtrl.getAll);
router.get('/:id', tagCtrl.getByQuestionId);
router.post('/', tagCtrl.create);
router.put('/', tagCtrl.update);
router.put('/:id/:id_branch', tagCtrl.addTag); // id del registro // id_branch del tag que se va a agregar
router.delete('/:id/:id_branch', tagCtrl.removeTag); // id del registro // id_branch del tag que se va a eliminar

module.exports = router;