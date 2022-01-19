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
            const backdropUrl= `https://image.tmdb.org/t/p/w500${movieDetails.backdrop_path}`
            return <>
                <Hero text={movieDetails.original_title}  backdrop={backdropUrl}/>
                <div className="container my-4">
                    <div className="row">
                        <div className="col-md-3">
                            <img src={posterPath} alt="..." className="img-fluid shadow rounded"/>
                        </div>
                        <div className="col-md-9">
                            <h2>{movieDetails.original_title}</h2>
                            <p className="lead">
                                {movieDetails.overview}
                            </p>
                        </div>
                    </div>
                </div>
            </>

        }
    }

  return renderMovieDetail()
};

export default MovieView;
