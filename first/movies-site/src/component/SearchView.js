const SearchView=({searchText,searchResult})=>{
    return(
        <>
            <header className="bg-primary text-white p-5 ">
                <h1>You are searching for {searchText}</h1>
            </header>
        </>
    )
}

export default SearchView