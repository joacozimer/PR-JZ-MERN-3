const express = require('express');
const router = express.Router();
const user = require('../models/User')

router.get('/users/singin', (req, res) => {
    res.render('users/singin');
});



router.get('/users/singup', (req, res) =>{
    res.render('users/singup');
});

router.post('/users/singup', (req, res) => {
  const NewUser = new User({ username, passwrd});
    NewUser.save();
  res.redirect('/notes');
})

module.exports = router;
