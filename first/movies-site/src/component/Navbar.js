import { Link, useNavigate } from "react-router-dom";
const Navbar = ({searchText, setSearchText}) => {
    const history=useNavigate()
    const updateSearch=(e)=>{
      history('/search')
        setSearchText(e.target.value)
      

    }

  <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
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
