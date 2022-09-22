import React, { useState, useEffect } from "react";
// types

export const usePopularMovies = () => {
  // USE STATE
  const [popularMovieResults, setPopularMovieResults] = useState<[]>([]);

  const [pageNum, setPageNum] = useState<number>(1);

  // FETCH POPULAR MOVIES
  useEffect(() => {
    const fetchPopularMovies = async () => {
      const popularMoviesResponse = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMBD_API_KEY}&language=en-US&page=${pageNum}`
      );
      const popularMovies = await popularMoviesResponse.json();
      const { page, results } = popularMovies;
      // console.log(popularMovies);

      setPopularMovieResults((prevResults): any => [
        ...prevResults,
        ...results,
      ]);
      setPageNum(page);
    };

    fetchPopularMovies();
  }, [pageNum]);

  const loadMore = (): void => {
    setPageNum((prevPageNum) => prevPageNum + 1);
  };

  return { popularMovieResults, loadMore };
};
