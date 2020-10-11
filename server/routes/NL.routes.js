const express = require('express');
const NLCtrl = require('../controllers/NLCtrl');

const router = express.Router();

router.post('/classify', NLCtrl.getclassification);
router.post('/allQuestions/', NLCtrl.getAllQuestions);
router.get('/questions/:ref', NLCtrl.getQuestions);

module.exports = router;
