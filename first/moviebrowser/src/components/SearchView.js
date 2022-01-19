import Hero from "./Hero";

const MovieCard = ({ movie }) => {
  const posterUrl=`https://image.tmdb.org/t/p/w500${movie.poster_path}`
  return (
    <>
      <div className="card" style="width: 18rem;">
        <img src={posterUrl} className="card-img-top" alt={movie.original_title} />
        <div className="card-body">
          <h5 className="card-title">{movie.original_title}</h5>
          <a href="#" className="btn btn-primary">
            show detail
          </a>
        </div>
      </div>
    </>
  );
};

const SearchView = ({ keyword, searchResults }) => {
  const title = `you are searching for ${keyword}`;
  console.log(searchResults, " are the search results ");

  const resultsHtml = searchResults.map((obj, i) => {
    return <div key={i}>{obj.original_title}</div>;
  });

  return (
    <>
      <Hero text={title} />
      {resultsHtml}
    </>
  );
};

export default SearchView;
