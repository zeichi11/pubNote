import express from 'express';
const auth = express.Router();

auth.get('/', function(req, res) {
	res.send('auth!');
});

export default auth;