import { useState } from 'react';
import './App.css';
import { useEffect } from 'react';
import { blogService } from './services/blogService';
import { Blog } from './types';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import CreateBlog from './components/CreateBlog';
import Home from './components/Home';

function App() {
	const [blogs, setBlogs] = useState<Blog[]>([]);

	useEffect(() => {
		blogService.getAllBlogs().then((blogs) => {
			setBlogs(blogs);
		});
	}, []);

	onresize = () => {
		location.reload();
	};

	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={<Home blogs={blogs} />} />
				<Route path='/blogs/new' element={<CreateBlog />} />
			</Routes>
		</>
	);
}

export default App;
