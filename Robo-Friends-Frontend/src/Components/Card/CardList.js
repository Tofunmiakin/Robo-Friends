// Loops through the users and assigns them a card view

import React from 'react';
import Card from './Card';

const CardList = ({robotList}) =>{
	return(
		<div style = {{ marginBottom: '100px'}} >
			{
				robotList.map((user, i) => {
					return (
						<Card 
							key ={i} 
							id={robotList[i].id}
							name ={robotList[i].name}
							email = {robotList[i].email} 
						/>
					);
				})
			}		
		</div>
	);
}

export default CardList;    