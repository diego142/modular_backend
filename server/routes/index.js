const express = require('express');
const userRouter = require('./user.routes');
const questionRouter = require('./question.routes');
const eventRouter = require('./event.routes');
const branchRouter = require('./branch.routes');
const tagRouter = require('./tag.routes');
const skillRouter = require('./skill.routes');
const NLRoute = require('./NL.routes');

const router = express.Router();

router.get('/foroqci/api/', (req, res)=> {
    res.send('This is an API for Foro QCI');
});

router.use('/foroqci/api/user', userRouter);
router.use('/foroqci/api/question', questionRouter);
router.use('/foroqci/api/event', eventRouter);
router.use('/foroqci/api/branch', branchRouter);
router.use('/foroqci/api/tag', tagRouter);
router.use('/foroqci/api/skill', skillRouter);
router.use('/foroqci/api/nl', NLRoute);

module.exports = router;