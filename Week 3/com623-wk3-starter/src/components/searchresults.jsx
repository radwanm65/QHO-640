// Search results component - display the search results

import React from 'react';

export default function SearchResults({songsArray, foreground}) {
	
	const songsJSX = songsArray.map ( song => 
		<li>{song.title} by {song.artist}, year {song.year}</li>
	);
	
	return <div id='results' style={{
                margin: '5px',
                width: '100%',
                height: '400px',
                overflow: 'auto',
                border: '1px solid ' + foreground 
            }}>
			<ul>{songsJSX}</ul>
			</div>
	
}