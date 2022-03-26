
function App() {

  const [searchResults,setSearchResults]=useState([])
  const [searchText,setSearchText]=useState('')

  useEffect(()=>{
    if(searchText){
      console.log(searchText,"is the search text")
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=cfc4a1b05a66247ddb5d7a51cd7c8280&language=en-US&query=${searchText}&page=1&include_adult=false`)
        .then(response =>response.json())
        .then(data=>{
          setSearchResults(data.results)
      })
    }
  },[searchText])

  return (
    <div>
      <Navbar searchText={searchText}  setSearchText={setSearchText}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutView />} />
        <Route path='/search' 
          element={
          <SearchView keyword={searchText} searchResults={searchResults}
        />}
        />
        <Route path="/movies/:id" element={<MovieView/>}/>
      </Routes>
    </div>
  );
}

export default App;
