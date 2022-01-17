import './App.css';
import Navbar from './components/Navbar'

const Home=()=>{
  return(
    <>
      <h1>Hello world</h1>
    </>
  )
}

function App() {
  return (
    <div >
      <Navbar/>
      <Home/>      
    </div>
  );
}

export default App;
