// Loops through the users and assigns them a card view

import React from 'react';
import Card from './Card';

//Maps throught the robotlist(which will be the filtered robots) props and gives each user a card with their name email and picture (gotten with their id)
const CardList = ({ robotList }) => {
	return (
		<div style={{ marginBottom: '100px' }} >
			{
				robotList.map((user, i) => {
					return (
						<Card
							key={i}
							id={robotList[i].id}
							name={robotList[i].name}
							email={robotList[i].email}
						/>
					);
				})
			}
		</div>
	);
}

export default CardList;