import React, { useState, useEffect } from "react";
// types
import { popularMovieType } from "../type";

export const usePopularMovies = () => {
  // USE STATE
  const [popularMovie, setPopularMovies] = useState<popularMovieType>(
    {} as popularMovieType
  );

  // FETCH POPULAR MOVIES
  useEffect(() => {
    const fetchPopularMovies = async () => {
      const popularMoviesResponse = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMBD_API_KEY}&language=en-US&page=1`
      );
      const popularMovies = await popularMoviesResponse.json();
      const { page, results } = popularMovies;

      setPopularMovies({
        page,
        results,
      });
    };

    fetchPopularMovies();
  }, []);

  return popularMovie;
};
