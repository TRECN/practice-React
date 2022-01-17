import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home'


import AboutView from './components/AboutView'

function App() {
  return (
    <div >
      <Switch>
        
        <Navbar/>
        <Home/>    
        <AboutView/>   
      </Switch> 
    </div>
  );
}

export default App;
