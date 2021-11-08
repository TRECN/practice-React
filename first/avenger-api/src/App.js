
import React, { useEffect,useState } from "react";
import Cards from "./components/Cards";
import Axios from 'axios'
export default function App() {
  
  
  const url = "https://api.tvmaze.com/search/shows?q=avengers";
  // let data={}
  // const num=Math.floor(Math.random()*10);
  // useEffect(() => {
    
  //   const fetchData = async () => {
  //     try{
  //       const resp=await fetch(url);
  //       const json=await resp.json();
  //       console.log(json);
  //       data=json;
  //       console.log(data)
  //       console.log(data[num])
  //     }
  //     catch(error){
  //       console.log('error',error);
  //     }
  //   }
  //   fetchData();
  // }, [])

  const [data,setData]=useState([]);
  
  useEffect(()=>{
    fetchData();
  },[])

  const fetchData=async()=>{
    const response = await Axios(url);
    setData(response['data'])
  }

  
  return (
    <div className="App">
      <h1></h1>
      <Cards{...data}/>
       
    </div>
  );
}