import './App.css';
import Navbar from './Header/Navbar';
import { useEffect } from 'react';
import Collection from './main/top-main/Collection';
import HotCategory from './main/hot-category/HotCategory';
import { Container } from '@mui/system';
import Products from './main/grid-products/Products';



function App() {
  useEffect(()=>{
    document.title = "React Material UI Home"
  })
  return (
    <Container max-width="md">
     <Navbar />
     <Collection />
     <HotCategory />    
     <Products />
    
    </Container>
    
  );
}

export default App;
