import Blog from '../models/blog';
import { BlogEntry } from '../types';
// import mongoose from 'mongoose';

// import blogData from '../../data/blogs.json';

// const blogs = blogData;

const getEntries = async (): Promise<BlogEntry[]> => {
	try {
		const blogs: BlogEntry[] = await Blog.find({});
		// mongoose.connection.close();
		return blogs;
	} catch (error) {
		if (error instanceof Error) {
			console.log('Error: ', error.message);
			throw error;
		}
		throw error;
	}
};

const addBlog = () => {};

export default { getEntries, addBlog };
