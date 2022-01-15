import logo from './logo.svg';

import './App.css';

import React from 'react';

// import Item from './MyItem'

class StarWars extends React.Component{
  render(){
    return(
      <h1>this is star Wars</h1>
    )
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <StarWars/>
      </header>
    </div>
  );
}

export default App;
