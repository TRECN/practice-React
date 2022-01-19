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
            const posterPath=`${movieDetails.poster_path}`
            return <>
                <Hero text={movieDetails.original_title} />
                <div className="container my-4">
                    <div className="row">
                        <div className="col-md-3">
                            left col
                        </div>
                        <div className="col-md-9">
                            right col
                        </div>
                    </div>
                </div>
            </>

        }
    }

  return renderMovieDetail()
};

export default MovieView;
