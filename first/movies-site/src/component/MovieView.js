import { useState } from "react";
import { useParams } from "react-router-dom"

const MovieView =()=>{
    const {id}=useParams();

    const [movieDetails,setMovieDetails]=useState({})


    const getMovieApi=()=>{
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=cfc4a1b05a66247ddb5d7a51cd7c8280&language=en-US`)
            .then(response=>response.json())
            .then(data=>{
                setMovieDetails(data)
            })
    }

    
    return<>

    </>
}