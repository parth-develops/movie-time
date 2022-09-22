import React from "react";
import styles from "./SearchMovieModal.module.css";

const SearchMovieModule = ({ movieResults }: any) => {
  return (
    <div className={styles.modal}>
      <div className={styles.movieCard}>
        {movieResults?.map((movieResult: any) => {
          return (
            <div className={styles.movieCardItems} key={movieResult.id}>
              <img
                src={`https://image.tmdb.org/t/p/original${movieResult.poster_path}`}
                alt={movieResults.poster_path}
                className={styles.moviePoster}
              />
              <div className={styles.movieCardDetails}>
                <h1>{movieResult.title}</h1>

                {/* <p>
                  {movieResult.genre_ids.map((id: number, index: number) => (
                    <span key={index}>{id}</span>
                  ))}
                </p> */}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SearchMovieModule;
