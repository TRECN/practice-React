import { Link, useNavigate } from "react-router-dom";
const Navbar = ({searchText, setSearchText}) => {
    const history=useNavigate()
    const updateSearch=(e)=>{
      history('/search')
        setSearchText(e.target.value)
}

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

        </div>
      </nav>
    </div>
  );
};

export default Navbar;


