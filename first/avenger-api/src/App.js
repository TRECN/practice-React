
import React, { useEffect } from "react";
import Cards from "./components/Cards";
export default function App() {
  
  
  const url = "https://api.tvmaze.com/search/shows?q=avengers";
  let data={}
  const num=Math.floor(Math.random()*10);
  useEffect(() => {
    
    const fetchData = async () => {
      try{
        const resp=await fetch(url);
        const json=await resp.json();
        console.log(json);
        data=json;
        console.log(data)
        console.log(data[num])
      }
      catch(error){
        console.log('error',error);
      }
    }
    fetchData();
  }, [])
  
  return (
    <div className="App">
      <h1>{data['8']}</h1>
      {
        console.log(data)
      }
      <Cards{...data}/>
       
    </div>
  );
}