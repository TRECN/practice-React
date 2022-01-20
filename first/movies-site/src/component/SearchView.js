const SearchView=({searchText,searchResult})=>{

    const ApiResult=searchResult.map((obj,i)=>{
        return <h1>obj.original_title</h1>
    })

    return(
        <>
            <header className="bg-primary text-white p-5 ">
                <h1>You are searching for {searchText}</h1>
                {ApiResult}
            </header>
        </>
    )
}

export default SearchView