
import React, { useEffect, useState } from "react";
export default function App() {
  
  
  const url = "https://api.tvmaze.com/search/shows?q=avengers";
  let data={}
  const [da,setDa]=useState({
    name:''
  });
  const [num,setNum]=useState({})
  useEffect(() => {
    setNum('8')
    const fetchData = async () => {
      try{
        const resp=await fetch(url);
        const json=await resp.json();
        console.log(json);
        setDa(json[num])
        
      }
      catch(error){
        console.log('error',error);
      }
    }
    fetchData();
  }, [])
  
  return (
    <div className="App">
      
      
    </div>
  );
}