// Card display of the users
// fetches the robot picture corresponding to the id from robohash

import React from 'react';
import './Card.css';

//Displays a name, email, and picture (which is gotten from the id).
const Card = ({ name, email, id }) => {
	return (
		<div className='robot-card'>
			<img alt='robots' src={`https://robohash.org/${id}?200x200`}></img>
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
}

export default Card;