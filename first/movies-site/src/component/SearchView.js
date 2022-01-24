import { Link } from "react-router-dom";
import Hero from "./Hero";

const MovieCard = ({ movie }) => {

    const path=`https://image.tmdb.org/t/p/w500${movie.poster_path}`
    const linkMovie=`/movie/${movie.id}`
  return (
    <div className="col-lg-3 col-md-3 col-2 my-4">
      <div className="card" style={{width:'18em'}}>
        <img src={path} className="card-img-top" alt={movie.original_title} />
        <div className="card-body">
          <h5 className="card-title">{movie.original_title}</h5>
          <Link to={linkMovie} className="btn btn-primary">
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

const SearchView = ({ searchText, searchResults }) => {
  const ApiResult = searchResults.map((obj, i) => {
    return   <MovieCard movie={obj} key={i}/>
      

};

export default SearchView;
