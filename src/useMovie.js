import { useState, useEffect } from "react";

export const useMovie = (query) => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    

    useEffect(
        function () {
          async function fetchMovies() {
            setIsLoading(true);
    
            const res = await fetch(
              `https://www.omdbapi.com/?apikey=9b096231&s=${query}`
            );
    
            const data = await res.json();
            if (data.Search) console.log(data.Search.length);
            if (data.Search) setMovies(data.Search);
            setIsLoading(false);
          }
    
          fetchMovies();
        },
        [query]
      );

      return {movies,isLoading,error}
}
