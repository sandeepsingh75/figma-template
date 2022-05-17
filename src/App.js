import logo from './logo.svg';
import './App.css';
import Navbar from './Header/Navbar';
import { useEffect } from 'react';
import Collection from './main/top-main/Collection';

function App() {
  useEffect(()=>{
    document.title = "React Material UI Home"
  })
  return (
    <div className="App">
     {/* Navbar */}
     <Navbar />
     <Collection />
    </div>
  );
}

export default App;
