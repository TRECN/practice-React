import logo from './logo.svg';
import React from 'react'
import './App.css';

class Item extends React.Component{
  render(){
    return(
      <h1>Hello World</h1>
    )
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
    </div>
  );
}

export default App;
