import Hero from "./Hero"

const MovieCard=({movie})=>{
    return <>
        <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </>
}

const SearchView=({searchText,searchResults})=>{

    const ApiResult=searchResults.map((obj,i)=>{
      return <>
          <h1>{obj.original_title}</h1>
        </>
    })

    return(
        <>
            <Hero text={searchText}/>
             {ApiResult} 
        </>
    )
}

export default SearchView