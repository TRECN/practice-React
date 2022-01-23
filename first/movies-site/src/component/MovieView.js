import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Hero from "./Hero";

const MovieView = () => {
  const { id } = useParams();

  const [movieDetails, setMovieDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const getMovieApi = () => {
    fetch(

  const imgPath = `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`;
  const backdropPath = `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`

  const renderDetail = () => {
    if (isLoading) {
      return <Hero text="Loading..." />;
    } if(movieDetails) {
      return (
        <>
          <Hero text={movieDetails.original_title} backdropPath={backdropPath}/>
          <div className="container my-5">
            <div className="row">
              <div className="col-md-3">
                <img src={imgPath} alt="" className="img-fluid rounded" />
              </div>
              <div className="col-md-9">
                <h2>{movieDetails.original_title}</h2>
                <p className="lead">{movieDetails.overview}</p>
              </div>
            </div>
          </div>
        </>
      );
    }
  };
  return renderDetail()
};



export default MovieView;
