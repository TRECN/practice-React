import { Link, useNavigate } from "react-router-dom";
const Navbar = ({searchText, setSearchText}) => {
    const history=useNavigate()
    const updateSearch=(e)=>{
      history('/search')
        setSearchText(e.target.value)
      

    }

 
};

export default Navbar;
