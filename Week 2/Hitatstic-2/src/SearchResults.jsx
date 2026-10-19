export default function SearchResults({ songs }) {
  return (
    <section>
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
    </section>
  );
}
