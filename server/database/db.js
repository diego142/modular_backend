const mongoose = require('mongoose');
mongoose.set('useUnifiedTopology', true);

// const URI = 'mongodb+srv://diegoFrias:udgcucei@mycluster.tf0x6.mongodb.net/test?retryWrites=true&w=majority';
const URI = 'mongodb://localhost/foroqci';

// mongodb+srv://diegoFrias:<password>@mycluster.tf0x6.mongodb.net/<dbname>?retryWrites=true&w=majority

mongoose.connect(URI, { useNewUrlParser: true })
    .then(db => console.log('DB is connected') )
    .catch( err => console.error(err) );

module.exports = mongoose;
