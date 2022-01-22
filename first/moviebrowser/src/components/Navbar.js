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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link disabled"
                  to="/"
                  tabIndex="-1"
                  aria-disabled="true"
                >
                  Coming soon
                </Link>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={searchText}
                onChange={updateSearch}
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
