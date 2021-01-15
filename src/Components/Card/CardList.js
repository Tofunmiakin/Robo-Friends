// Loops through the users and assigns them a card view

import React from 'react';
import Card from './Card';

const CardList = ({robots}) =>{
	return(
		<div style = {{ marginBottom: '100px'}} >
			{
				robots.map((user, i) => {
					return (
						<Card 
							key ={i} 
							id={robots[i].id}
							name ={robots[i].name}
							email = {robots[i].email} 
						/>
					);
				})
			}		
		</div>
	);
}

export default CardList;    