
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

  const [dataa,setDataa]=useState([]);
  const [data,setData]=useState({});
  
  useEffect(()=>{
    fetchData();
  },[])

  useEffect(()=>{
    console.log(dataa)
  },[dataa])

  const fetchData=async()=>{
    const response = await Axios(url);
    setDataa(response.data)
    setData(dataa[1])
  }


  return (
    <div className="App">
      <h1></h1>
      
       
    </div>
  );
}