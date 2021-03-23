import mongoose from 'mongoose';

const Schema = mongoose.Schema;
export default mongoose.model('note', new Schema({
	title: String,
	author: String,
	published: Boolean,
	// update_date: { type: String, default: Date.now }
	update_date: String
}));
