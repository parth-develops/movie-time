import MovieCard from "./MovieCard";
import styles from "./PopularMovies.module.css";

import { popularMovieType, resultObj } from "../type";

// Custom Hook
import { usePopularMovies } from "../hooks/usePopularMovies";
import { stringify } from "querystring";

function PopularMovies() {
  const popularMovies = usePopularMovies();

  const { page, results } = popularMovies;

  return (
    <div className={styles.popularMovies}>
      <h1 className={styles.popularMovieTitle}>Popular Movies</h1>
      <div className={styles.popularMoviesRow}>
        <>
          {results?.map((result) => {
            let { title, vote_average, poster_path, id } = result;
            return (
              <MovieCard
                key={id}
                title={title}
                vote_average={vote_average}
                poster_path={poster_path}
              />
            );
          })}
        </>
      </div>
      <button className={styles.loadMore}>Load More...</button>
    </div>
  );
}

export default PopularMovies;
