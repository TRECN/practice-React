import { Link } from "react-router-dom";
import Hero from "./Hero";

const MovieCard = ({ movie }) => {

    const path=`https://image.tmdb.org/t/p/w500${movie.poster_path}`
  return (
    <div className="">
      <div className="card" style={{width:'18em'}}>
        <img src={path} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{movie.original_title}</h5>
          <Link to='/' className="btn btn-primary">
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

const SearchView = ({ searchText, searchResults }) => {
  const ApiResult = searchResults.map((obj, i) => {
    return (
      <>
        <MovieCard movie={obj}/>
      </>
    );
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
