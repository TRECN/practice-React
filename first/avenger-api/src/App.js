
import React, { useEffect,useState } from "react";
import Cards from "./components/Cards";
export default function App() {
  
  
  const url = "https://api.tvmaze.com/search/shows?q=avengers";
  const Fetch=async()=>{
    const response=await fetch(url);
    

  }

  useEffect(()=>{
    Fetch()
  })
  


  return (
    <div className="App">
      <h1>a</h1>
      <Cards{...json[1]}/>
       
    </div>
  );
}