import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutView from "./components/AboutView";
import SearchView from './components/SearchView'

import { Routes, Route } from "react-router-dom";
import { useState } from "react";


function App() {

  const [searchResults,setSearchResults]=useState([])

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutView />} />
        <Route path='/search' element={<SearchView/>}/>
      </Routes>
    </div>
  );
}

export default App;
