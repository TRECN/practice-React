
import React, { useEffect, useState } from "react";

import Cards from "./components/Cards";
import Axios from 'axios'
export default function App() {
  
  
  const url = "https://api.tvmaze.com/search/shows?q=avengers";
  let data={}
  const [da,setDa]=useState([])

  useEffect(() => {
    
    
    fetchData();
  }, [])

  const fetchData = async () => {
    try{
      const resp= await Axios(url);
      setDa(resp.data)
    }
    catch(error){
      console.log('error',error);
    }
  }
  
  return (
    <div className="App">
      <h1>{da}</h1>
      
      <Cards{...data}/>
       
    </div>
  );
}