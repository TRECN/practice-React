import { Link } from "react-router-dom";
import Hero from "./Hero";

const MovieCard = ({ movie }) => {

    const path=`https://image.tmdb.org/t/p/w500${movie.poster_path}`
    const linkMovie=`/movie/${movie.id}`
  return (
    <div className="col-lg-3 col-md-3 col-2 my-4">
      <div className="card" style={{width:'18em'}}>

const SearchView = ({ searchText, searchResults }) => {
  const ApiResult = searchResults.map((obj, i) => {
    return   <MovieCard movie={obj} key={i}/>
      
  });

  const title=`You are searching for ${searchText}`

  return (
    <>
      <Hero text={title} />
      <div className="container">
          <div className="row">
              {ApiResult}
          </div>
      </div>
    </>
  );
};

export default SearchView;
