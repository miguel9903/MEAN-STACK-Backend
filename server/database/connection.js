const mongoose = require('mongoose');

const URI = 'mongodb://localhost/mean-employees';

mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true})
        .then(db => console.log('Database connected'))
        .catch(err => console.log(err));

module.exports = mongoose;