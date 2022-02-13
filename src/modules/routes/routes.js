const express = require('express');
const router = express.Router();

const {
  getNotes,
  createNewNote,
  changeNoteInfo,
  deleteNote
} = require('../controllers/note.controller');

router.get('/allNotes', getNotes);
router.post('/createNote', createNewNote);
router.patch('/updateNote', changeNoteInfo);
router.delete('/deleteNote', deleteNote);

module.exports = router;