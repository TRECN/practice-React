import './App.css';
import Navbar from './component/Navbar'
import Home from './component/Home';
import About from './component/About';

import { Routes,Route } from 'react-router-dom';
import SearchView from './component/SearchView';
import { useState } from 'react';



function App() {

  const [searchResult,setSearchResult]=useState({})
  const [searchText,setSearchText]=useState('hi')

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path="/search" element={
          <SearchView searchText={searchText} searchResult={searchResult}/>
        }/>
      </Routes>
    </div>
  );
}

export default App;
