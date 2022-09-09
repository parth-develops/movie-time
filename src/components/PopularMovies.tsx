import React from "react";
import MovieCard from "./MovieCard";
import styles from "./PopularMovies.module.css";

// type Props = {}

function PopularMovies() {
  return (
    <div className={styles.popularMovies}>
      <h1 className={styles.popularMovieTitle}>Popular Movies</h1>
      <div className={styles.popularMoviesRow}>
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
      <button className={styles.loadMore}>Load More...</button>
    </div>
  );
}

export default PopularMovies;
