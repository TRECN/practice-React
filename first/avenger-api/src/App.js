
import React, { useEffect,useState } from "react";
//import Cards from "./components/Cards";
export default function App() {
  
  
  const url = "https://api.tvmaze.com/search/shows?q=avengers";
  let data;
  const Fetch=async()=>{
    try{
    const response=await fetch(url);
    const json=await response.json();
    console.log(json)
    data=json
    console.log(data)
    }catch(error){
      console.log(error)
    }
  };

  useEffect(()=>{
    Fetch()
  },[])
  


  return (
    <div className="App">
      <h1>a</h1>
      {/* <Cards{...json[1]}/> */}
       
    </div>
  );
}