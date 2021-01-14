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