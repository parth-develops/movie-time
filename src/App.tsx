import classes from "./App.module.css";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/detail" element={<MovieDetails />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
