import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import PopularMovies from "../components/PopularMovies";
import MovieOfTheWeekBanner from "../components/MovieOfTheWeek";

interface MovieOfTheWeekProp {
  id: number;
  title: string;
  overview: string;
  movieBanner: string;
}

function Home() {
  const [movieOfTheWeek, setMovieOfTheWeek] = useState<MovieOfTheWeekProp>({
    id: 0,
    title: "",
    overview: "",
    movieBanner: "",
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    fetchMovieOfTheWeek();
  }, []);

  const fetchMovieOfTheWeek = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.REACT_APP_TMBD_API_KEY}`
      );
      const data = await response.json();
      const { results } = data;

      const { id, title, overview, backdrop_path: movieBanner } = results[0];
      setMovieOfTheWeek({ id, title, overview, movieBanner });
      setErrorMsg(null);
    } catch (error) {
      setErrorMsg('Error while Loading data. Please try again Later');
    } finally {
      setIsLoading(false);
    }

  };

  return (
    <>
      <Navbar />
      <MovieOfTheWeekBanner movieOfTheWeek={movieOfTheWeek} isLoading={isLoading} errorMsg={errorMsg} />
      <PopularMovies />
    </>
  );
}

export default Home;
