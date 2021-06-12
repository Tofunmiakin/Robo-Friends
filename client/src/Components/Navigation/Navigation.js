// When signed in the navigataion shows the sign out button
// when not signed in the navigation shows the sign up button

import React from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom';

const Navigation = () => {
	return (
		<nav>
			<h1 className='title'>RoboFriends</h1>
			<Link to='/'>
				<a href='#'>Sign Out</a>
			</Link>
		</nav>
	);



}

export default Navigation;