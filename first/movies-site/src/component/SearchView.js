import { Link } from "react-router-dom";
import Hero from "./Hero";

const MovieCard = ({ movie }) => {
  return (
    <>
      <div class="card" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{movie.original_title}</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <Link to='/' class="btn btn-primary">
            Go somewhere
          </Link>
        </div>
      </div>
    </>
  );
};

const SearchView = ({ searchText, searchResults }) => {
  const ApiResult = searchResults.map((obj, i) => {
    return (
      <>
        <h1 key={i}>{obj.original_title}</h1>
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
