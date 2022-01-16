//import logo from './logo.svg';

import './App.css';

import React from 'react';

// import Item from './MyItem'

class FilmItemRow extends React.Component{
  render(){
    return(
      <li>
        <a href={this.props.url}>{this.props.url}</a>
      </li>
    )
  }
}

class StarWars extends React.Component{

  constructor(){

    super()

    this.state={
      loadedCharacter:false,
      name:null,
      height:null,
      homeworld:null,
      films:[]
    }
  }


  getNewCharacter=()=>{
    console.log("clicked")
    //getting api request
    let num=Math.round(Math.random()*82);
    const url = `https://swapi.dev/api/people/${num}/`
    fetch(url)
      .then(response=>response.json())
      .then(data=>{
        console.log(data)
        this.setState({
          loadedCharacter:true,
          name:data.name,
          height:data.height,
          homeworld:data.homeworld,
          films:data.films

        })
      })

    
  }

  render(){

    const movies=
        this.state.films.map((i,url)=>{
          return <FilmItemRow key={i} url={url}/>
        })
      
    
    return(
      
      <div>
        {
          this.state.loadedCharacter&&
            <div >
                <h1>{this.state.name}</h1>
                <p>{this.state.height}</p>
                <p><a href= {this.state.homeworld}>Homeworld</a></p>
                <ul>
                  {movies}
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
