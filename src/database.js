const mongoose = require('mongoose');
console.log("Base de datos Prendida");
mongoose.connect('mongodb://localhost/notas-tp', {
    useNewUrlParser: true
})
    .then(db => console.log('db esta conectada'))
    .catch(err => console.error('err', err));