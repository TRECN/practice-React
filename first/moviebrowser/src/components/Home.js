const Hero=()=>{
  return(
    <header className="bg-dark text-white p-5">
      <h1>This is a hero component</h1>
    </header>
  )
}
const Home=()=>{
    return(
      <>
        <Hero/>
        <h1>Hello world</h1>
      </>
    )
  }

export default Home