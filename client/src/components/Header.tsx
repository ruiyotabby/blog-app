import { Link } from 'react-router-dom';
import Icon from '@mdi/react';
import { mdiAccountCircle } from '@mdi/js';
import { useState } from 'react';

const Header = () => {
	const [displayPopup, setDisplayPopup] = useState(false);

	return (
		<>
			<header>
				<h2 style={{ margin: 0 }}>Riba</h2>
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
					}}
				>
					{window.innerWidth > 400 && (
						<div style={{ display: 'flex', alignItems: 'center' }}>
							<Link to='/'>Home</Link>
							<Link to=''>Categories</Link>
							<Link to='/blogs/new' className='sign-up'>
								Write
							</Link>
							{/* <Link to='/sign-up' className='sign-up'>
								Get started
							</Link>
							<Link to='/sign-in'>Sign in</Link> */}
						</div>
					)}
					<span onClick={() => setDisplayPopup(!displayPopup)}>
						<Icon className='icon' path={mdiAccountCircle} size={1.5} />
					</span>
				</div>
			</header>
			<div className={`pop-up ${!displayPopup ? 'hide' : ''}`}>
				<p>
					<b>Get started</b>
				</p>
				<button className='sign-up'>Sign up</button>
				<button className='sign-in'>Sign in</button>
				{window.innerWidth < 400 && (
					<Link to='/notes/new' className='sign-up'>
						Write
					</Link>
				)}
			</div>
		</>
	);
};

export default Header;
