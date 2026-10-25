// Search entry component

import React, { Fragment } from 'react';

// onSearchEntered is a prop (a parameter passed into a component)
export default function Search({onSearchEntered}) {
	
	// What does search need to return?
	return <Fragment>
			<label htmlFor='artist'>Enter an artist:</label>
            <br />
            <input id='artist' /><br />
            <input type='button' onClick={handleSearchButton} value='Search!' />
			</Fragment>;
			
	function handleSearchButton() {
		const artist = document.getElementById('artist').value;
		// "onSearchEntered" is our callback function which points to a function 
		// in the App component, so that the App component can receive it
		onSearchEntered(artist);
	}
	
}