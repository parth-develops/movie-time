import React from "react";
import Navbar from "../components/Navbar";
import PopularMovieBanner from "../components/PopularMovieBanner";
import PopularMovies from "../components/PopularMovies";

// type Props = {};

function Home() {
  return (
    <>
      <Navbar />
      <PopularMovieBanner />
      <PopularMovies />
    </>
  );
}

export default Home;
