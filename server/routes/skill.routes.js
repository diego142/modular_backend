const express = require('express');
const skillCtrl = require('../controllers/skillCtrl');

const router = express.Router();

router.get('/', skillCtrl.getAll);
router.get('/:id', skillCtrl.getByUserId);
router.post('/', skillCtrl.create);
router.put('/', skillCtrl.update);
router.put('/:id/:id_branch', skillCtrl.addSkill);  // id del registro // id_skill del tag que se va a agregar
router.delete('/:id/:id_branch', skillCtrl.removeSkill);  // id del registro // id_skill del tag que se va a eliminar

module.exports = router;