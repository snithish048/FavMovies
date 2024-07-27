import { useState, useEffect } from "react";
import StarRating from "./StarRating"
import Loader from "./Loader";
import star from '../assets/SVG/star.svg'

const styles = {
  iconSize:" h-16 w-16 " ,
  summaryStyle: "flex gap-1 items-baseline"
}

function MovieDetails({
    selectedId,
    handleCloseMovie,
    handleAddWatched,
    watched,
  }) {
  
    const [movie, setMovie] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [userRating, setUserRating] = useState("");
  
    const isWatched = watched.map((movie) => movie.imdbID).includes(selectedId);
  
    const watchedUserRating = watched.find(
      (movie) => movie.imdbID === selectedId
    )?.userRating;
  
    const {
      Title: title,
      Year: year,
      Poster: poster,
      Runtime: runtime,
      imdbRating,
      Plot: plot,
      Released: released,
      Actors: actors,
      Director: director,
      Genre: genre,
    } = movie;
  
    const handleAdd = () => {
      const newWatchedMovie = {
        imdbID: selectedId,
        title,
        year,
        poster,
        imdbRating: Number(imdbRating),
        runtime: Number(runtime.split(" ").at(0)),
        userRating,
      };
  
      handleAddWatched(newWatchedMovie);
      handleCloseMovie();
    };

    useEffect(
      function () {
        function callback(e) {
          if (e.code === "Escape") {
            handleCloseMovie();
          }
        }
  
        document.addEventListener("keydown", callback);
        return () => document.removeEventListener("keydown", callback);
      },
      [handleCloseMovie]
    );
  
    useEffect(
      function () {
        async function getMovieDetails() {
          setIsLoading(true);
          const res = await fetch(
            `https://www.omdbapi.com/?apikey=9b096231&i=${selectedId}`
          );
          const data = await res.json();
          setMovie(data);
          setIsLoading(false);
        }
        getMovieDetails();
      },
      [selectedId]
    );
  
    useEffect(
      function () {
  
        if (title)document.title = title;
        return () => (document.title = "usePopcorn");
      },
      [title]
    );  
  
    return (
      <div className="details">
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <header>
              <button className="font-bold text-2xl p-4 rounded-2xl bg-[#232F3E] hover:bg-[#0894c7] absolute top-3 right-3" onClick={handleCloseMovie}>
                back
              </button>
              <img src={poster} alt={`poster of ${movie} movie`} />
              <div className="details-overview">
                <h2>{title}</h2>
                <p>
                  {released} &bull; {runtime}
                </p>
                <p>{genre}</p>
                <p>
                  
                  <span>⭐</span>
                  {imdbRating} IMDB rating
                </p>
              </div>
            </header>
  
            <section>
              <div className="rating">
                {!isWatched ? (
                  <>
                    <StarRating
                      maxRating={10}
                      size={17}
                      onSetRating={setUserRating}
                    />
                    {userRating > 0 && (
                      <button className="font-bold text-2xl p-4 rounded-2xl bg-[#232F3E] hover:bg-[#0894c7]" onClick={handleAdd}>
                        Add to favourite
                      </button>
                    )}
                  </>
                ) : (
                  <p>
                    You rated this movie with <span >⭐</span> {watchedUserRating}
                    
                  </p>
                )}
              </div>
  
              <p>
                <em>{plot}</em>
              </p>
              <p>Starring {actors}</p>
              <p>Directed by {director}</p>
            </section>
          </>
        )}
      </div>
    );
  }

  export default MovieDetails