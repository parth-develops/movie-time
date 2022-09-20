import React, { useContext } from "react";
import classes from "./App.module.css";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
<<<<<<< HEAD
import ProvideCurrentMovie from './components/contexts';
=======
import { CurrentMovieContext } from "./components/CurrentMovieContext";
>>>>>>> 5e93bdb (BEFORE Movie Details Completed~)

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const currentMovie = useContext(CurrentMovieContext);
  return (
<<<<<<< HEAD
    <ProvideCurrentMovie>
=======
    <CurrentMovieContext.Provider value={currentMovie}>
>>>>>>> 5e93bdb (BEFORE Movie Details Completed~)
      <BrowserRouter>
        <div className={classes.App}>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/detail" element={<MovieDetails />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </ProvideCurrentMovie>
  );
}

export default App;
