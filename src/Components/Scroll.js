// This was made so that only the cardlist body will be scrollable
// The navigation and search bar remain stagnant

import React from 'react';
import {RemoveScroll} from 'react-remove-scroll';

const Scroll = (props) => {
	return (
		<RemoveScroll>
			<div style = {{overflowY: 'scroll', border: '5px solid black', height: '800px'}}>
				{props.children}
			</div>
		</RemoveScroll>
	);
};

export default Scroll;