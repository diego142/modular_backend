const express = require('express');

const router = express.Router();

router.get('/foroqci/api/', (req, res)=> {
    res.send('This is an API for Foro QCI');
});

module.exports = router;