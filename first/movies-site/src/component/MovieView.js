import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Hero from "./Hero";

const MovieView = () => {
  const { id } = useParams();

  const [movieDetails, setMovieDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const getMovieApi = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=cfc4a1b05a66247ddb5d7a51cd7c8280&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovieDetails(data);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getMovieApi();
  }, [id]);

  const imgPath = `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`;
  const backdropPath = `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`

  const renderDetail = () => {
    if (isLoading) {
      return <Hero text="Loading..." />;
    } if(movieDetails) {
      return (
        <>
          <Hero text={movieDetails.original_title} backdropPath={backdropPath}/>
        
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
