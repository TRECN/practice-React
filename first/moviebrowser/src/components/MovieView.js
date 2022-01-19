import Hero from "./Hero";
import { useParams } from "react-router-dom";
import { useState, useEffect} from "react";
const AboutView = () => {
    const {id}=useParams();
    console.log(id)

    const [movieDetails,setMovieDetails]=useState({})

    useEffect(()=>{
        console.log('make a api request ',id)

    },[id])

  return (
    <>
      <Hero text="Movie details" />
      
    </>
  );
};

export default AboutView;
