import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Hero from "./Hero";

const MovieView = () => {
  const { id } = useParams();

  const [movieDetails, setMovieDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const getMovieApi = () => {
   
  };
  return renderDetail()
};



export default MovieView;
