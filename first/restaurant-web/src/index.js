import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Components/Card';
import CardDisplay from './Components/CardDisplay';

//importing css
import "./Components/index.css"
import Navbar from './Components/Navbar';

ReactDOM.render(
  <React.StrictMode>
    <Navbar/>
    <CardDisplay/>
  </React.StrictMode>,
  document.getElementById('root')
);

