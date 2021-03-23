import express from 'express';
const root = express.Router();

root.get('/', function(req, res) {
	res.send('Hello world!!!!');
});

export default root;