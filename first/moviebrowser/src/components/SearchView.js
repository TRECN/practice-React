import Hero from "./Hero";
const SearchView = ({keyword,searchResults}) => {
    
  const title=`you are searching for ${keyword}`

  return <>
    <Hero text={title}/>
  </>;
};

export default SearchView;
