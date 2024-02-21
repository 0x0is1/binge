import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/HomePage/Home';
import SignUp from "../pages/SignUpPage/SignUp";
import Movie from "../pages/MoviePage/Movie";
import Series from "../pages/SeriesPage/Series";
import Search from "../pages/SearchPage/Search";
import MovieLibrary from '../pages/MovieLibraryPage/MovieLibrary';
import SeriesLibrary from "../pages/SeriesLibraryPage/SeriesLibrary";
import Movies from '../pages/MoviesPage/Movies';
import Seriess from '../pages/SeriessPage/Seriess';
import NavBar from '../components/NavBar/NavBar';

const AppRouter = () => {
  const [name, setName] = useState("Guest");
  return (
    <BrowserRouter>
      <NavBar name={name}/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signup" element={<SignUp setName={setName} />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/seriess" element={<Seriess />}></Route>
        <Route path="/movie/:mid" element={<Movie />}></Route>
        <Route path="/series/:sid" element={<Series />}></Route>
        <Route path="/series-library" element={<SeriesLibrary />}></Route>
        <Route path="/movies-library" element={<MovieLibrary />}></Route>
        <Route path="/search" element={<Search />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;