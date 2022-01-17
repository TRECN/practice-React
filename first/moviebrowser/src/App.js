import './App.css';
import Navbar from './components/Navbar'

const Home=()=>{
  return(
    <>
      <h1>Hello world</h1>
    </>
  )
}

function App() {
  return (
    <div >
      <Navbar/>
      <h1>Hello from React 2022</h1>
    </div>
  );
}

export default App;
