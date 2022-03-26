import Hero from "./Hero";
import { useParams } from "react-router-dom";
import { useState, useEffect} from "react";
const MovieView = () => {
    const {id}=useParams();
    console.log(id)

    const [movieDetails,setMovieDetails]=useState({})
    const [isLoading, setIsLoading]=useState(true)





  return renderMovieDetail()
};

export default MovieView;
