import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import SearchMovieModal from "../components/SearchMovieModal";
import { searchMovieResults } from "../type";

function Navbar() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [movieResults, setMovieResults] = useState<searchMovieResults>();

  const handelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };
  useEffect(() => {
    const fetchSearchMovies = async () => {
      const searchMovieResponse = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMBD_API_KEY}&language=en-US&query=${searchQuery}&page=1&include_adult=false`
      );
      const searchedMovies = await searchMovieResponse.json();
      const { results } = searchedMovies;

      // const { title, genre_ids, poster_path, id } = results;
      setMovieResults(results);
    };

    fetchSearchMovies();
  }, [searchQuery]);

  return (
    <nav className={styles.nav}>
      <a className={styles.a} href="/">
        MovieTime
      </a>

      <div>
        <input
          className={styles.input}
          type="search"
          placeholder="Search movie"
          value={searchQuery}
          onChange={(event) => handelChange(event)}
        />
        {searchQuery && <SearchMovieModal movieResults={movieResults} />}
      </div>
    </nav>
  );
}

export default Navbar;
