// import mongoose from 'mongoose';

export interface BlogEntry {
	id: string;
	title: string;
	publish_date: string;
	content: string;
	tags: string[];
	comments: number;
	rating: number;
	category: string;
	author: author;
}

export interface UserEntry {
	id: number;
	first_name: string;
	last_name: string;
	email: string;
	blogs: BlogEntry[];
}

type author = Omit<UserEntry, 'blogs'>;
