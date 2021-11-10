const express = require('express');
const Notes = require('../models/Notes');
const router = express.Router();

const Note = require('../models/Notes');

router.get('/notes/add', (req, res) => {
    res.render('notes/new-note');
});

router.post('/notes/new-note', (req, res) => {
   res.redirect('/notes'); 
});

router.post('/notes', async (req, res) => {
   const { title, description } = req.body;
   
   if(!title) return res.render('notes/new-note', { errort: true }); 
   if(!description) return res.render('notes/new-note', { errord: true });
   else{
    const NewNote = new Note({ title, description});
    await NewNote.save();
    res.redirect('/notes')
   }
});

router.get('/notes', async (req, res) => {
   const notes = await Note.find() .sort({date: 'desc'});
   res.render('notes/all-notes', { notes });
});
router.get('/notes/edit/:id', async (req, res) => {
    const note = await Notes.findById(req.params.id)
    res.render('/notes/edit-note', {note});
});

router.get

module.exports = router;
//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