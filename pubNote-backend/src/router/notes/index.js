import express from 'express';
import Note from '../../db/model/note/Note';
const notes = express.Router();

// 모든 note 조회
notes.get('/', function (req, res) {
	res.send('get all note');
});

notes.get('/:nid', function (req, res) {
	res.send('find note by nid');
});

notes.post('/', function (req, res) {
	// create new notes
	const note = new Note();
	note.title = req.body.title;
	note.author = req.body.author;
	note.published = false;
	note.update_date = req.body.update_date;
	note.save(function (err) {
		if (err) {
			console.error(err);
			res.json({result: 'fail'});
			return;
		}

		res.json({result: 'success123', title: req.body.title, author: req.body.author});
	});
});

notes.put('/:nid', function (req, res) {
	// replace notes. if note not exist than create.
});

notes.patch('/:nid', function (req, res) {
	// update note.
});

notes.delete('/', function (req, res) {
	// delete all notes
});

notes.delete('/:nid', function (req, res) {
	// delete nid note
});

export default notes;