import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Components/Card';

//importing css
import "./Components/index.css"
import Navbar from './Components/Navbar';

ReactDOM.render(
  <React.StrictMode>
    <Navbar/>
    <Card/>
  </React.StrictMode>,
  document.getElementById('root')
);

