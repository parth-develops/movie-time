import { useState } from "react";
// TypeScript Types
import { CurrentMovie } from "../type";

export const useProvideMovieContext = () => {
  const [currentMovie, setCurrentMovie] = useState<CurrentMovie>();

  const KEY = process.env.REACT_APP_TMBD_API_KEY;

  const fetchCurrentMovie = async (id: number) => {
    const movieResponse = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${KEY}&language=en-US`
    );
    const movieData = await movieResponse.json();
    const {
      backdrop_path: movieBanner,
      poster_path: moviePoster,
      title: movieTitle,
      overview: plot,
      genres,
      vote_average: rating,
    } = movieData;

    const directorResponse = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${KEY}&language=en-US`
    );
    const directorData = await directorResponse.json();
    const { crew } = directorData;
    const directors = crew
      .filter((crewObj: any) => {
        return crewObj.job === "Director";
      })
      .map((directorObj: any) => directorObj.name);

    setCurrentMovie({
      movieBanner,
      moviePoster,
      movieTitle,
      plot,
      genres,
      rating,
      directors,
    });
  };

  return { currentMovie, fetchCurrentMovie };
};
