const Note = require('../../db/models/note')

module.exports = {
  saveNote(req, res) {
    const newNote = new Note({
      title:  'Do shopping',
      body: 'Milk, eggs, water',
    });

    newNote.save()
      .then(() => {
        console.log('Note has been saved')
      });

    res.send('Site works!')
  },
};