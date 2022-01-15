import logo from './logo.svg';

import './App.css';

import React from 'react';

// import Item from './MyItem'

class StarWars extends React.Component{

  getNewCharacter=()=>{
    console.log("clicked")
  }

  render(){
    return(
      <div>
        <h1>Name</h1>
        <p>Height cm</p>
        <p>Homeworld: URL</p>
        <ul>
          <li>Films in here</li>
        </ul>
        <button type='button' onClick={()=>this.getNewCharacter()} className='btn'>Randomize</button>
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
