import React,{useEffect,useState} from "react";

function App() {

  const [lat,setLat] = useState([]);
  const [long,setLong]=useState([]);

  useEffect(()=>{
    navigator.geolocation.getCurrentPosition(function(position){
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    })
  });


  return (
    <div className="App">
      
    </div>
  );
}

export default App;
