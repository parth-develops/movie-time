import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import PopularMovieBanner from "../components/PopularMovieBanner";
import PopularMovies from "../components/PopularMovies";

interface MovieOfTheWeekProp {
  title: string,
  overview: string,
  movieBanner: string
}

function Home() {
  const [movieOfTheWeek, setMovieOfTheWeek] = useState<MovieOfTheWeekProp>({ title: '', overview: '', movieBanner: '' });
  useEffect(() => {
    fetchMovieOfTheWeek();
  }, []);

  const fetchMovieOfTheWeek = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.REACT_APP_TMBD_API_KEY}`);
    const data = await response.json();
    const { results } = data;
    console.log(results);

    const { title, overview, backdrop_path: movieBanner } = results[0];
    setMovieOfTheWeek({ title, overview, movieBanner });
  };

  console.log(movieOfTheWeek);


  return (
    <>
      <Navbar />
      <PopularMovieBanner movieOfTheWeek={movieOfTheWeek} />
      <PopularMovies />
    </>
  );
}

export default Home;
