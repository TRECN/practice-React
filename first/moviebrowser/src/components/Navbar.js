import {useNavigate, Link } from "react-router-dom";
//cfc4a1b05a66247ddb5d7a51cd7c8280
//https://api.themoviedb.org/3/search/movie?api_key=cfc4a1b05a66247ddb5d7a51cd7c8280&language=en-US&query=star%20wars&page=1&include_adult=false
const Navbar = ({ searchText, setSearchText }) => {
  const history=useNavigate()
  const updateSearch = (e) => {
    history('/search')
    setSearchText(e.target.value);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Movies Browser
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
         
    </div>
  );
};

export default Navbar;
