import logo from './logo.svg';

import './App.css';

import React from 'react';

// import Item from './MyItem'

class StarWars extends React.Component{
  render(){
    return(
      <div>
        <h1>Name</h1>
        <p>Height cm</p>
      </div>  
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
