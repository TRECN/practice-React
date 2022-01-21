import './App.css';
import Navbar from './component/Navbar'
import Home from './component/Home';
import About from './component/About';
import MovieView from './component/MovieView';


function App() {

  const [searchResults,setSearchResults]=useState([])
  const [searchText,setSearchText]=useState('')
  const [apiText,setApiText]=useState('')

  useEffect(()=>{
      setApiText(searchText)
    if(apiText){
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=cfc4a1b05a66247ddb5d7a51cd7c8280&language=en-US&query=${apiText}&page=1&include_adult=false`)
        .then(response=>response.json())
        .then(data=>{
          setSearchResults(data.results)
          console.log(searchResults)
        })
    }
  },[searchText])
  return (
    <div className="App">
      <Navbar searchText={searchText} setSearchText={setSearchText}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path="/search" element={
          <SearchView searchText={searchText} searchResults={searchResults}/>
        }/>
        <Route path='/movie/:id' element={<MovieView/>}/>
      </Routes>
    </div>
  );
}

export default App;

//cfc4a1b05a66247ddb5d7a51cd7c8280
//https://api.themoviedb.org/3/search/movie?api_key=cfc4a1b05a66247ddb5d7a51cd7c8280&language=en-US&query=star%20wars&page=1&include_adult=false