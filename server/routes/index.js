const express = require('express');
const userRouter = require('./user.routes');

const router = express.Router();

router.get('/foroqci/api/', (req, res)=> {
    res.send('This is an API for Foro QCI');
});

router.use('/foroqci/api/user', userRouter);

module.exports = router;