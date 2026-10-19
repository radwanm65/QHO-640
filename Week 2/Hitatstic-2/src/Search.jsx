import { useState } from "react";

export default function Search({ onSearch }) {
  const [artist, setArtist] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    onSearch(artist);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="artist">Search by artist:</label>

      <input
        id="artist"
        type="text"
        value={artist}
        onChange={(event) => setArtist(event.target.value)}
        placeholder="Enter artist name"
      />

      <button type="submit">Search</button>
    </form>
  );
}
