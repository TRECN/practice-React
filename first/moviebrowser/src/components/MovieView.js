import Hero from "./Hero";
import { useParams } from "react-router-dom";
import { useState, useEffect} from "react";
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
            const posterPath=`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
            const backdropUrl= `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`
          

        }
    }

  return renderMovieDetail()
};

export default MovieView;
