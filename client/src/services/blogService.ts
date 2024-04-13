import axios from 'axios';
import { Blog } from '../types';
const baseUrl = 'http://localhost:3000/api/blogs';

const getAllBlogs = () =>
	axios.get<Blog[]>(baseUrl).then((response) => response.data);

export const blogService = { getAllBlogs };
