import dotenv from 'dotenv';
import Server from './server';
import mongoose from 'mongoose';

dotenv.config();

const db = mongoose.connection;

mongoose.connect('mongodb://localhost:27017/pubNote');
mongoose.Promise = global.Promise;

db.on('error', console.error);
db.once('open', function () {
	console.log('Connected to mongoDB Server');
});

//mongoose.connect('mongodb://username:password@host:port/database?options...');

const local = new Server();
const port = process.env.PORT || 8080;

local.listen(port);