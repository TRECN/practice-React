import Hero from "./Hero";

const MovieCard = ({ movie }) => {
  const posterUrl=`https://image.tmdb.org/t/p/w500${movie.poster_path}`
  return (
    <>
      <div className="col-lg-4 col-md-3 col-2">
        <div className="card" style={{width:'18em'}}>
          <img src={posterUrl} className="card-img-top" alt={movie.original_title} />
          <div className="card-body">
            <h5 className="card-title">{movie.original_title}</h5>
            <a href="#" className="btn btn-primary">
              show detail
            </a>
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
