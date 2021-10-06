const mongoose = require('mongoose');
console.log('asdasd');
mongoose.connect('mongodb://localhost/notas-tp', {
    useNewUrlParser: true
})
    .then(db => console.log('db esta conectada'))
    .catch(err => console.error('err', err));