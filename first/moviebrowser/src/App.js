import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutView from "./components/AboutView";
import SearchView from './components/SearchView'

import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {

  const [searchResults,setSearchResults]=useState([])
  const [searchText,setSearchText]=useState('')

  useEffect(()=>{
    // console.log(searchText)
  },[searchText])

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
      </Routes>
    </div>
  );
}

export default App;
