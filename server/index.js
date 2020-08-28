const express = require('express');
const cors = require('cors');
const { mongoose } = require('./database/db');

const app = express();

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: false}));

// Routes
app.use(require('./routes/index'));

// Starting server
app.listen(app.get('port'), () => {
    console.log('server on port: ' + app.get('port'));
});