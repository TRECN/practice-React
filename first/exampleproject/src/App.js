import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './Components/Pages/HomePage/Home';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/' exact component={Home}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
