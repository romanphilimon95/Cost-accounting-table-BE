const Note = require('../../db/models/note/index');

module.exports.getNotes = (req, res, next) => {
  try {
    Note.find().then(result => {
      res.send({data: result});
    });
  } catch (error) {
    res.status(error.status || 500).send({
      error: {
        status: error.status || 500,
        message: error.message || "Internal Server Error",
      },
    });
  }
}

module.exports.createNewNote = (req, res, next) => {
  const body = req.body;

  if (Object.keys(body)) {
    const note = new Note(req.body);
    note.save().then(result => {
      res.send(result);
    });
  } else {
    res.status(422).send('Data is incorrect, error!');
  }
}

module.exports.changeNoteInfo = (req, res, next) => {
  const body = req.body;

  if (body.shop && body.amount && body.date && body._id) {
    Note.updateOne({_id: req.query._id}, req.body).then(result => {
      res.send(result);
    });
  } else {
    res.status(422).send('Data is incorrect, error!');
  }
}

module.exports.deleteNote = (req, res, next) => {
  if (!req.query._id) {
    return res.status(422).send('Error! Params not correct');
  } else {
    Note.deleteOne({_id: req.query._id}).then(result => {
      res.send('succesfully deleted');
    });
  }
}