import React, { createContext, FC, useContext, useState } from "react";

interface Genres {
  id: number,
  name: string
}

interface CurrentMovie {
  movieBanner?: string,
  moviePoster?: string,
  movieTitle?: string,
  plot?: string,
  genres?: Genres[],
  rating?: number,
  // director: string,
}

interface CurrentMovieContext {
  currentMovie?: CurrentMovie;
  fetchCurrentMovie: (id: number) => Promise<void>;
}

const currentMovieContext = createContext({} as CurrentMovieContext);

export const useCurrentMovieContext = () => {
  return useContext(currentMovieContext);
};

function useProvideMovieContext() {
  const [currentMovie, setCurrentMovie] = useState<CurrentMovie>();

  const fetchCurrentMovie = async (id: number) => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMBD_API_KEY}&language=en-US`);

    const data = await response.json();

    const { backdrop_path: movieBanner, poster_path: moviePoster, title: movieTitle, overview: plot, genres, vote_average: rating } = data;

    setCurrentMovie({ movieBanner, moviePoster, movieTitle, plot, genres, rating });
  };



  return { currentMovie, fetchCurrentMovie };
}

const ProvideCurrentMovie: FC<{ children: React.ReactNode }> = ({ children }: any) => {
  const movie: CurrentMovieContext = useProvideMovieContext();

  return (
    <currentMovieContext.Provider value={movie}>
      {children}
    </currentMovieContext.Provider>
  );
};

export default ProvideCurrentMovie;
