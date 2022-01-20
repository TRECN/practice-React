import Hero from "./Hero"

const SearchView=({searchText,searchResults})=>{

     const ApiResult=searchResults.map((obj,i)=>{
      return <>
          <h1>{obj.original_title}</h1>
    </>
    })

    return(
        <>
            <Hero text={searchText}/>
            {/* {ApiResult} */}
        </>
    )
}

export default SearchView