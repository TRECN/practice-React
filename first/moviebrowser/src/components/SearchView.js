import Hero from "./Hero";

const MovieCard = ({ movie }) => {
  return (
    <>
      <div className="card" style="width: 18rem;">
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
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
