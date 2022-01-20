import './App.css';
import Navbar from './component/Navbar'
import Home from './component/Home';
import About from './component/About';

import { Routes,Route } from 'react-router-dom';
import SearchView from './component/SearchView';
import { useEffect, useState } from 'react';



function App() {

  const [searchResults,setSearchResults]=useState({})
  const [searchText,setSearchText]=useState('')

  useEffect(()=>{
    if(searchText){
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=cfc4a1b05a66247ddb5d7a51cd7c8280&language=en-US&query=${searchText}&page=1&include_adult=false`)
        .then(response=>response.json())
        .then(data=>{
          setSearchResults(data.results)
          console.log(data.results)
        })
    }
  },[searchText])
  return (
    <div className="App">
      <Navbar searchText={searchText} setSearchText={setSearchText}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path="/search" element={
          <SearchView searchText={searchText} searchResult={searchResults}/>
        }/>
      </Routes>
    </div>
  );
}

export default App;

//cfc4a1b05a66247ddb5d7a51cd7c8280
//https://api.themoviedb.org/3/search/movie?api_key=cfc4a1b05a66247ddb5d7a51cd7c8280&language=en-US&query=star%20wars&page=1&include_adult=false