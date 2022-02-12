import {useNavigate, Link } from "react-router-dom";
//cfc4a1b05a66247ddb5d7a51cd7c8280
//https://api.themoviedb.org/3/search/movie?api_key=cfc4a1b05a66247ddb5d7a51cd7c8280&language=en-US&query=star%20wars&page=1&include_adult=false
const Navbar = ({ searchText, setSearchText }) => {
  const history=useNavigate()
  const updateSearch = (e) => {
    history('/search')
    setSearchText(e.target.value);
  };
