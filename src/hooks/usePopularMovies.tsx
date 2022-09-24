import React, { useState, useEffect } from "react";
// types

export const usePopularMovies = () => {
  // USE STATE
  const [popularMovieResults, setPopularMovieResults] = useState<[]>([]);
  const [pageNum, setPageNum] = useState<number>(1);

  const [isLoading, setIsloading] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // FETCH POPULAR MOVIES
  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        setIsloading(true);
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
        setErrorMsg(null);
      } catch (error) {
        setErrorMsg('Error Loading Movies. Please try again Later');
      } finally {
        setIsloading(false);
      }
    };

    fetchPopularMovies();
  }, [pageNum]);

  const loadMore = (): void => {
    setPageNum((prevPageNum) => prevPageNum + 1);
  };

  return { popularMovieResults, loadMore, isLoading, errorMsg };
};
