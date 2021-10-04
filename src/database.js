const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/notas-tp', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false
})
    .then(db => console.log('db esta conectada'))
    .catch(err => console.error('err'));