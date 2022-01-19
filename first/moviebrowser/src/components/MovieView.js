import Hero from "./Hero";
import { useParams } from "react-router-dom";
import { useState, useEffect} from "react";
import { render } from "@testing-library/react";
const MovieView = () => {
    const {id}=useParams();
    console.log(id)

    const [movieDetails,setMovieDetails]=useState({})
    const [isLoading, setIsLoading]=useState(true)

    useEffect(()=>{
        console.log('make a api request ',id)
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=cfc4a1b05a66247ddb5d7a51cd7c8280&language=en-US`)
            .then(response=>response.json())
            .then(data=>{
                setMovieDetails(data)
                setIsLoading(false)
            })

    },[id])

    const renderMovieDetail=()=>{
        if(isLoading){
            return <Hero text="Loading..."/>
        }
        if(movieDetails){
            return <Hero text={movieDetails.original_title} />

        }
    }

  return renderMovieDetail()
};

export default MovieView;
