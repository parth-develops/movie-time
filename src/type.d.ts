import { Genres } from "./type.d";
export interface Genres {
  id: number;
  name: string;
}

export interface CurrentMovie {
  movieBanner?: string;
  moviePoster?: string;
  movieTitle?: string;
  plot?: string;
  genres?: Genres[];
  rating?: number;
  directors?: string[];
}

export interface CurrentMovieContext {
  currentMovie?: CurrentMovie;
  fetchCurrentMovie: (id: number) => Promise<void>;
}
// we cannot update methods in an object
interface popularMovieResultObj {
  title?: string;
  vote_average?: number;
  poster_path?: string | null;
  id?: number;
}
export interface searchMovieResults {
  title?: string;
  genre_ids?: string;
  poster_path?: string | null;
  id?: number;
}

// export interface searchMovieResultsArrayType {
//   []: searchMovieResults;
// }
