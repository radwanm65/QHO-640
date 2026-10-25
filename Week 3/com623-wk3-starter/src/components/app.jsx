import React, { useState, useEffect, Fragment }  from 'react';
import Search from './search.jsx';
import SearchResults from './searchresults.jsx';

export default function App() {
   const [darkMode, setDarkMode] = useState(false);
   const [currentSongs, setCurrentSongs] = useState([]);
    const background = darkMode ? 'black' : 'white',
            foreground = darkMode ? 'white': 'black';
    return <div style={{
                backgroundColor: background, 
                color: foreground, 
                padding: '10px'
            }}>
			<Search onSearchEntered={searchCallback}/>
            <br />
            <label htmlFor='mode'>Choose mode:</label>
            <br />
            <select id='mode' onChange={updateMode}>
            <option value='light'>Light mode</option>
            <option value='dark'>Dark mode</option>
            </select>
            <SearchResults songsArray={currentSongs} foreground={foreground} />
			</div>;

    async function searchCallback() {
        const artist = document.getElementById('artist').value;

        const response = await fetch(`/artist/${artist}`);
		
		const songs = await response.json();
		
        //  store the  songs in state.
		setCurrentSongs(songs);
    }

    function updateMode() {
        setDarkMode(document.getElementById('mode').value=='dark');
    }
}
