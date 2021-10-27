const express = require('express');
const router = express.Router();
const User = require('../models/User')

router.get('/users/singin', (req, res) => {
    res.render('users/singin');
});



router.get('/users/singup', (req, res) =>{
    res.render('users/singup');
});

router.post('/users/singup', (req, res) => {
  const { username, password } = req.body;

  const NewUser = new User({ username, password});
    NewUser.save();
  res.redirect('/notes');
})

module.exports = router;
