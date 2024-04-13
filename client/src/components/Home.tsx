import { Blog } from '../types';

const Home = ({ blogs }: { blogs: Blog[] }) => {
	return (
		<div className='body'>
			<p
				style={{
					fontSize: '48px',
					fontWeight: 400,
					textAlign: 'center',
					letterSpacing: '-0.04em',
					lineHeight: '52px',
				}}
			>
				A place to share and read memorable journeys
			</p>
			<div>
				<b style={{ display: 'block' }}>Discover</b>
			</div>
			{blogs.map((blog) => (
				<div key={blog.id}>
					<p>
						{blog.author.first_name} {blog.author.last_name}
					</p>
					<b>{blog.title}</b>
					<p>{blog.content}</p>
					<span>{blog.publish_date}</span>
				</div>
			))}
		</div>
	);
};

export default Home;
