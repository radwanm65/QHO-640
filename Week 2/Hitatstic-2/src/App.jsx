import { useState, useEffect } from "react";

export default function App() {
  const [songs, setSongs] = useState([]);
  const [artist, setArtist] = useState("");
  /*
  useEffect(() => {
    fetch("/songs/all")
      .then((response) => response.json())
      .then((data) => setSongs(data))
      .catch((error) => console.error("Error loading songs:", error));
  }, []);
*/
  async function searchSongs() {
    try {
      // Select the appropriate API route
      const url = artist.trim()
        ? `/artist/${encodeURIComponent(artist.trim())}`
        : "/songs/all";

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Failed to retrieve songs");
      }

      // Parse the JSON response
      const data = await response.json();

      // Store the returned array in state
      setSongs(data);
    } catch (error) {
      console.error("Error searching for songs:", error);
      setSongs([]);
    }
  }

  return (
    <div>
      <h1>HitTastic!</h1>

      <label htmlFor="artist">Artist:</label>

      <input
        id="artist"
        type="text"
        value={artist}
        onChange={(event) => setArtist(event.target.value)}
        placeholder="Enter an artist"
      />

      <button onClick={searchSongs}>Search</button>

      <button
        onClick={() => {
          setArtist("");
          fetch("/songs/all")
            .then((response) => {
              if (!response.ok) {
                throw new Error("Failed to retrieve songs");
              }
              return response.json();
            })
            .then((data) => setSongs(data))
            .catch((error) => {
              console.error(error);
              setSongs([]);
            });
        }}
      >
        Show All Songs
      </button>

      <h2>Search Results</h2>

      {songs.length === 0 ? (
        <p>No songs found.</p>
      ) : (
        <ul>
          {songs.map((song) => (
            <li key={song.id}>
              {song.title} - {song.artist} ({song.year})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
