export interface Blog {
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

export interface User {
	id: number;
	first_name: string;
	last_name: string;
	email: string;
	blogs: Blog[];
}

type author = Omit<User, 'blogs'>;
