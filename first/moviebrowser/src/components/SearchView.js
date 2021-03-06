import Hero from "./Hero";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const posterUrl=`https://image.tmdb.org/t/p/w500${movie.poster_path}`
  const detailUrl=`/movies/${movie.id}`
  return (
    <>
      <div className="col-lg-3 col-md-3 col-2 my-4">
        <div className="card" style={{width:'18em'}}>
          <img src={posterUrl} className="card-img-top" alt={movie.original_title} />
          <div className="card-body">
            <h5 className="card-title">{movie.original_title}</h5>
            <Link to={detailUrl} className="btn btn-primary">
              show detail
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

const SearchView = ({ keyword, searchResults }) => {
  const title = `you are searching for ${keyword}`;
  console.log(searchResults, " are the search results ");

  const resultsHtml = searchResults.map((obj, i) => {
    return <MovieCard movie={obj} key={i}/>;
  });

  return (
    <>
      <Hero text={title} />
      <div className="container">
        <div className="row">
        {resultsHtml}
        </div>
      </div>
    </>
  );
};

export default SearchView;
