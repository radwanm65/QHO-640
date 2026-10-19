import { useState, useEffect } from "react";
import Search from "./Search";
import SearchResults from "./SearchResults";

export default function App() {
  const [songs, setSongs] = useState([]);

  // Load all songs when App first loads
  useEffect(() => {
    fetch("/songs/all")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load songs");
        }
        return response.json();
      })
      .then((data) => setSongs(data))
      .catch((error) => console.error(error));
  }, []);

  // Handle searches initiated by the Search component
  async function handleSearch(artist) {
    try {
      const url = artist.trim()
        ? `/artist/${encodeURIComponent(artist.trim())}`
        : "/songs/all";

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Failed to search songs");
      }

      const data = await response.json();

      // Update state in the parent component
      setSongs(data);
    } catch (error) {
      console.error("Search failed:", error);
      setSongs([]);
    }
  }

  return (
    <div>
      <h1>HitTastic!</h1>

      <Search onSearch={handleSearch} />

      <SearchResults songs={songs} />
    </div>
  );
}
