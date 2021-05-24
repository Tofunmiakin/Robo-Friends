// searches by name only
// When the searchbar changes, the robotlist changes accordingly

import React from 'react';
import './SearchBox.css'

const SearchBox = ({ searchChange }) => {
	return (
		<div className='search'>
			<input
				className='search-bar'
				type='search'
				placeholder='search robots'
				onChange={searchChange}
			/>
		</div>
	);
}

export default SearchBox;