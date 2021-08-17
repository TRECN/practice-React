import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { Route } from 'react-router';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './Components/Pages/HomePage/Home';
import Footer from './Components/Pages/Footer/Footer';
import Pricing from './Components/Pricing';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/' exact component={Home}></Route>
        </Switch>
        
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
