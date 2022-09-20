import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import PopularMovies from "../components/PopularMovies";
import MovieOfTheWeekBanner from "../components/MovieOfTheWeek";

interface MovieOfTheWeekProp {
  id: number
  title: string,
  overview: string,
  movieBanner: string
}

function Home() {
  const [movieOfTheWeek, setMovieOfTheWeek] = useState<MovieOfTheWeekProp>({ id: 0, title: '', overview: '', movieBanner: '' });

  useEffect(() => {
    fetchMovieOfTheWeek();
  }, []);

  const fetchMovieOfTheWeek = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.REACT_APP_TMBD_API_KEY}`);
    const data = await response.json();
    const { results } = data;


    const { id, title, overview, backdrop_path: movieBanner } = results[0];
    setMovieOfTheWeek({ id, title, overview, movieBanner });
  };

  

  return (
    <>
      <Navbar />
      <MovieOfTheWeekBanner movieOfTheWeek={movieOfTheWeek} />
      <PopularMovies />
    </>
  );
}

export default Home;
