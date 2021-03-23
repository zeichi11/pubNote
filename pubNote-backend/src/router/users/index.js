import express from 'express';
const user = express.Router();

user.get('/:id', function (req, res) {
	res.send('Received a Get request, param: ' + req.params.id);
});

user.post('/', function (req, res) {
	res.json({ success: true });
});

user.put('/', function (req, res) {
	res.status(400).json({ message: 'Bad Request' });
});

user.delete('/:id', function (req, res) {
	res.send('Receive a DELETE request');
});

export default user;
