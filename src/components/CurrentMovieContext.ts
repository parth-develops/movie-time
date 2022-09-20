import React, { useState } from "react";

interface genresObjType {
  id: number;
  name: string;
}

interface currentMovieContextType {
  movieBanner: string;
  moviePoster: string;
  movieTitle: string;
  plot: string;
  genres: genresObjType[];
  rating: number;
  director: string;
}

// export let currentMovieData = {};

const CurrentMovieObj = {
  async fetchCurrentMovieInfo(id: number) {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMBD_API_KEY}&language=en-US`
    );
    const data = await response.json();
    console.log("CurrentMovie", data);
    const {
      backdrop_path: movieBanner,
      poster_path: moviePoster,
      title: movieTitle,
      overview: plot,
      genres,
      vote_average: rating,
    } = data;

    // currentMovieData = {
    //   movieBanner,
    //   moviePoster,
    //   movieTitle,
    //   plot,
    //   genres,
    //   rating,
    // };
  },
};

export const CurrentMovieContext = React.createContext(
  {} as currentMovieContextType
);

export const CurrentMovieFetcher = React.createContext(CurrentMovieObj);
