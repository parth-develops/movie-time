import React, { useRef } from "react";
import { Link } from "react-router-dom";
import useOnClickOutside from "../hooks/useOnclickOutside";
import { useCurrentMovieContext } from "./contexts";
import useScrollToTop from "../hooks/useScrollToTop";

import { AiFillStar } from "react-icons/ai";
import styles from "./SearchMovieModal.module.css";

const SearchMovieModule = ({ movieResults, onCloseModal }: any) => {
  const searchModalRef = useRef(null);
  useOnClickOutside(searchModalRef, onCloseModal);
  const { fetchCurrentMovie } = useCurrentMovieContext();
  const scrollToTop = useScrollToTop();

  return (
    <div className={styles.modal} ref={searchModalRef}>
      <div className={styles.movieCard}>
        {movieResults?.map((movieResult: any) => {
          return (
            <Link to="/detail">
              <div className={styles.movieCardItems} key={movieResult.id} onClick={() => {fetchCurrentMovie(movieResult.id); scrollToTop();}}>
                <div className={styles.searchResultsPoster}>
                  <img
                    src={`https://image.tmdb.org/t/p/original${movieResult.poster_path}`}
                    alt={movieResults.poster_path}
                  />
                </div>
                <div className={styles.movieCardDetails}>
                  <h1 className={styles.movieTitle}>{movieResult.title}</h1>
                  <p className={styles.releaseDate}>{movieResult.release_date}</p>
                  <div className={styles.rating}>
                    <AiFillStar
                      size={20}
                      style={{ color: "yellow" }}
                      className={styles.ratingLogo}
                    />
                    <p className={styles.vote}>{movieResult.vote_average.toFixed(1)}</p>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SearchMovieModule;
