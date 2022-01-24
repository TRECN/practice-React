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
