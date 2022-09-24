import MovieCard from "./MovieCard";
import styles from "./PopularMovies.module.css";
import { Oval } from 'react-loader-spinner';

// Custom Hook
import { usePopularMovies } from "../hooks/usePopularMovies";

function PopularMovies() {
  const { popularMovieResults, loadMore, isLoading, errorMsg } = usePopularMovies();

  return (
    <div className={styles.popularMovies}>
      <h1 className={styles.popularMovieTitle}>Popular Movies</h1>
      <div className={styles.popularMoviesRow}>
        <>
          {errorMsg ? errorMsg : popularMovieResults?.map((result) => {
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
      <button className={styles.loadMore} onClick={loadMore}>{isLoading ? <Oval
        height={25}
        width={25}
        color="#db0000"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel='oval-loading'
        secondaryColor="#831010"
        strokeWidth={2}
        strokeWidthSecondary={2}
      /> : 'Load More'}</button>
    </div>
  );
}

export default PopularMovies;
