import express from 'express';
import blogService from '../services/blogService';
// import { BlogEntry } from '../types';

const router = express.Router();

router.get('/', (_req, res) => {
	blogService
		.getEntries()
		.then((blogs) => res.send(blogs))
		.catch((err) => console.log(err));
});

// router.post('/', (req, res) => blogService.addBlog());

export default router;
