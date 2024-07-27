import { useState, useEffect } from "react";
import Loader from "./components/Loader";
import WatchedSummary from "./components/WatchedSummary";
import Box from "./components/Box";
import Search from "./components/Search";
import WatchedMovieList from "./components/WatchedMovieList";
import MovieList from "./components/MovieList";
import MySvg from '../src/assets/SVG/logo.svg'
import MovieDetails from "./components/MovieDetails";
import { useMovie } from "./useMovie";
import { useLocalStorage } from "./useLocalStorage";
import RightPanel from './components/rightPanel'

const KEY = "9b096231";
const URL = `https://www.omdbapi.com/?apikey=${KEY}`;

export default function App() {

  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(null);


  const onSelectMovie = (id) => {
    setSelectedId((selectedId) => (id === selectedId ? null : id));
  };

  const handleCloseMovie = (id) => {
    setSelectedId(null);
  };

  const handleAddWatched = (movie) => {
    setWatched((watched) => [...watched, movie]);
  };

  const handleDeleteWatched = (id) => {
    setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
  };


  const [watched, setWatched] = useLocalStorage([], "watched")
  const {movies,isLoading,error} = useMovie(query)



  return (
    <div >
      <NavBar>
        <Logo />
        <Search setQuery={setQuery} query={query} />
        <NumResults movies={movies} />
      </NavBar>

      <Main>
        <Box>
          {isLoading && <Loader />}
          {!isLoading && !error && (
            <MovieList movies={movies} onSelectMovie={onSelectMovie} />
          )}
          {query && error && <ErrorMessage message={error} />}
        </Box>
        <Box>
          {selectedId ? (
            <MovieDetails
              selectedId={selectedId}
              handleCloseMovie={handleCloseMovie}
              handleAddWatched={handleAddWatched}
              watched={watched}
            >
              {" "}
              <Loader />
            </MovieDetails>
          ) : (
            <>
              <WatchedSummary watched={watched} />
              <WatchedMovieList
                setSelectedId={setSelectedId}
                watched={watched}
                handleDeleteWatched={handleDeleteWatched}
              />
            </>
          )}
        </Box>
      </Main>
    </div>
  );
}

function ErrorMessage({ message }) {
  return (
    <p className="error">
      <span>⚠</span>
      {message}
    </p>
  );
}

const NavBar = ({ children }) => {
  return <nav className="nav-bar">{children}</nav>;
};

const Logo = () => {
  return (
    <div className="logo">
      <img className="h-18 w-20 " src={MySvg} alt=" Logo" />

      <h1 className="mt-5">FavMovies</h1>
    </div>
  );
};


const NumResults = ({ movies }) => {
  return (
    <p className="num-results">
      Results Found -
      <strong>{movies.length}</strong>

    </p>
  );
};

const Main = ({ children }) => {
  return (
    <div div className="background-container ">
     <main className="main">
       {children} 
    </main>
    </div>
  );
};

 

