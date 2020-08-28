const mongoose = require('mongoose');
mongoose.set('useUnifiedTopology', true);

const URI = 'mongodb://localhost/foroqci';

mongoose.connect(URI, { useNewUrlParser: true })
    .then(db => console.log('DB is connected') )
    .catch( err => console.error(err) );

module.exports = mongoose;
