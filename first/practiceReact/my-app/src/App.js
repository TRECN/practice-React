//import logo from './logo.svg';

import './App.css';

import React from 'react';

// import Item from './MyItem'

class StarWars extends React.Component{

  constructor(){

    super()

    this.state={
      loadedCharacter:false,
      name:null,
      height:null,
      homeworld:null,
      flims:[]
    }
  }


  getNewCharacter=()=>{
    console.log("clicked")
    //getting api request
    const url = "https://swapi.dev/api/people/1/"
    fetch(url)
      .then(response=>response.json())
      .then(data=>{
        console.log(data)
      })

    this.setState({
      loadedCharacter:true,
      name:'luke',
      height:175,
      homeworld:'Totonine',
      flims:['item 1', 'item2']
    })
  }

  render(){
    return(
      
      <div>
        {
          this.state.loadedCharacter&&
            <div >
                <h1>{this.state.name}</h1>
                <p>{this.state.height}</p>
                <p>Homeworld: {this.state.homeworld}</p>
                <ul>
                  <li>{this.state.flims}</li>
                </ul>
            </div>
          
        }
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
