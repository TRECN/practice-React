import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutView from "./components/AboutView";
import SearchView from './components/SearchView'
import MovieView from './components/MovieView'


import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";


  return (
    <div>
      <Navbar searchText={searchText}  setSearchText={setSearchText}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutView />} />
        <Route path='/search' 
          element={
          <SearchView keyword={searchText} searchResults={searchResults}
        />}
        />
        <Route path="/movies/:id" element={<MovieView/>}/>
      </Routes>
    </div>
  );
}

export default App;
