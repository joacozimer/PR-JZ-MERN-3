const express = require('express');
const path = require('path');
const pug = require('pug');
const methodOverride = require('method-override');
const session = require('express-session');


const app = express();
require('./database');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug',({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    extname: '.pug'
}));


app.use(methodOverride('_method'));
app.use(session({
    secret: 'secreto',
    resave: true,
    saveUninitialized: true
}));




app.use('/', require('./routes/index'));
app.use('/', require('./routes/notes'));
app.use('/', require('./routes/users'));


app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), () => {
    console.log('servidor escuchando en el puerto', app.get('port'))
});
