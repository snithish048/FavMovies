import WatchedMovie from "./WatchedMovie";

export default function WatchedMovieList  ({ watched, handleDeleteWatched, setSelectedId })  {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovie
          handleDeleteWatched={handleDeleteWatched}
          setSelectedId={setSelectedId}
          movie={movie}
          key={movie.imdbID}
          
        />
      ))}
    </ul>
  );
};
