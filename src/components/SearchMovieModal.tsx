import React from "react";
import { AiFillStar } from "react-icons/ai";
import styles from "./SearchMovieModal.module.css";

const SearchMovieModule = ({ movieResults }: any) => {
  return (
    <div className={styles.modal}>
      <div className={styles.movieCard}>
        {movieResults?.map((movieResult: any) => {
          return (
            <div className={styles.movieCardItems} key={movieResult.id}>
              <div className={styles.searchResultsPoster}>
                <img
                  src={`https://image.tmdb.org/t/p/original${movieResult.poster_path}`}
                  alt={movieResults.poster_path}
                />
              </div>
              <div className={styles.movieCardDetails}>
                <h1 className={styles.movieTitle}>{movieResult.title}</h1>
                <p className={styles.releaseDate}>{movieResult.release_date}</p>
                <p className={styles.rating}>
                  <AiFillStar
                    size={20}
                    style={{ color: "yellow" }}
                    className={styles.ratingLogo}
                  />
                  <p className={styles.vote}>{movieResult.vote_average} / 10</p>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SearchMovieModule;
