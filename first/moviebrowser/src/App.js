import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home'
import AboutView from './components/AboutView'
import { Router } from 'react-router-dom';

function App() {
  return (
    <div >
      <Switch>
        <Router>
          
        </Router>
        <Navbar/>
        <Home/>    
        <AboutView/>   
      </Switch> 
    </div>
  );
}

export default App;
