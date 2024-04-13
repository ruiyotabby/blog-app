import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import blogRouter from './routes/blogs';

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

mongoose.set('strictQuery', false);
mongoose
	.connect(process.env.DB_URL!)
	.then(() => console.log('connected to Mongodb'))
	.catch((error: Error) => console.log('some error', error.message));

app.use('/api/blogs', blogRouter);

app.listen(process.env.PORT, () =>
	console.log('server running on port', process.env.PORT)
);
