import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home'

const AboutView=()=>{
  return(
    <h2>About us</h2>
  )
}
import AboutView from './components/AboutView'

function App() {
  return (
    <div >
      <Navbar/>
      <Home/>    
      <AboutView/>  
    </div>
  );
}

export default App;
