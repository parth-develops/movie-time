import MovieCard from "./MovieCard";
import styles from "./PopularMovies.module.css";

// Custom Hook
import { usePopularMovies } from "../hooks/usePopularMovies";

function PopularMovies() {
  const {popularMovieResults, loadMore} = usePopularMovies();

  return (
    <div className={styles.popularMovies}>
      <h1 className={styles.popularMovieTitle}>Popular Movies</h1>
      <div className={styles.popularMoviesRow}>
        <>
          {popularMovieResults?.map((result) => {
            let { title, vote_average, poster_path, id } = result;
            return (
              <MovieCard
                key={id}
                title={title}
                vote_average={vote_average}
                poster_path={poster_path}
                id={id}
              />
            );
          })}
        </>
      </div>
      <button className={styles.loadMore} onClick={loadMore}>Load More</button>
    </div>
  );
}

export default PopularMovies;
