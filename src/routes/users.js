const express = require('express');
const router = express.Router();

router.get('/users/singin', (req, res) => {
    res.render('users/singin');
});



router.get('/users/singup', (req, res) =>{
    res.render('users/singup');
});

router.post('/users/singup', (req, res) => {
  res.redirect('/notes');
})

module.exports = router;
