
import React, { useEffect, useState } from "react";
export default function App() {
  
  
  const url = "https://api.tvmaze.com/search/shows?q=avengers";
  const [data,setData]=useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try{
        const resp=await fetch(url);
        const json=await resp.json();
        
      }
    }
    fetchData();
  }, [])
  
  return (
    <div className="App">
      
      
    </div>
  );
}