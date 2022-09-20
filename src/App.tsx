import React from 'react';
import classes from "./App.module.css";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import ProvideCurrentMovie from './components/contexts';

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <ProvideCurrentMovie>
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
