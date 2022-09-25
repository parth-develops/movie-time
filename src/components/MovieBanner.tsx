import classes from "./MovieBanner.module.css";
import { useCurrentMovieContext } from "./contexts";
import { Oval } from 'react-loader-spinner';

const MovieBanner = () => {
  const { currentMovie, isMovieLoading, errorMsg } = useCurrentMovieContext();

  return (
    <section className={classes["movie-banner"]}>
      <div className={classes.bannerWrapper}>
        {
          isMovieLoading ? <Oval
            height={80}
            width={80}
            color="#db0000"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel='oval-loading'
            secondaryColor="#831010"
            strokeWidth={2}
            strokeWidthSecondary={2}
          /> :
            ( errorMsg || <img
              loading="lazy"
              src={`https://image.tmdb.org/t/p/original${currentMovie?.movieBanner}`}
              alt={`${currentMovie?.movieTitle} Banner`}
            />)
        }
      </div>
    </section>
  );
};

export default MovieBanner;
