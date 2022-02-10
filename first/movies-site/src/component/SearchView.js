import { Link } from "react-router-dom";
import Hero from "./Hero";

const MovieCard = ({ movie }) => {

    const path=`https://image.tmdb.org/t/p/w500${movie.poster_path}`
    const linkMovie=`/movie/${movie.id}`
  return (

  );
};

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
