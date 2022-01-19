import Hero from "./Hero";
const SearchView = ({keyword,searchResults}) => {
    
  const title=`you are searching for ${keyword}`
  console.log(searchResults, " are the search results ")

  const resultsHtml=searchResults.map((obj,i)=>{
    return <div>{obj.original_title}</div>
  })

  return <>
    <Hero text={title}/>
  </>;
};

export default SearchView;
