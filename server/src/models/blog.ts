import mongoose from 'mongoose';
import { BlogEntry } from '../types';

const blogSchema = new mongoose.Schema<BlogEntry>({
	title: String,
	author: {
		id: Number,
		first_name: String,
		last_name: String,
		email: String,
	},
	id: {
		type: String,
		required: true,
	},
	content: String,
	publish_date: String,
	tags: [String],
	comments: Number,
	rating: Number,
	category: String,
});

blogSchema.set('toJSON', {
	transform: (_document, returnedObject) => {
		returnedObject.id = returnedObject._id.toString();
		delete returnedObject._id;
		delete returnedObject.__v;
	},
});

const Blog = mongoose.model<BlogEntry>('Blog', blogSchema);

export default Blog;
