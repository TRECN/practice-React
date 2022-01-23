import { Link } from "react-router-dom";
import Hero from "./Hero";

const MovieCard = ({ movie }) => {


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
