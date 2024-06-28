import logo from './logo.svg';
import './App.css';
import {BrowserRouter , Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import SingleProduct from './pages/SingleProduct';
import Navbar from './components/Navbar';
import Cart from './pages/Cart';
import { useState } from 'react';
function App() {

 
  
  return (
   <>
   <BrowserRouter>
        <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>  }/>
        <Route path='/single' element={<SingleProduct  />}/>
        <Route path='/cart' element={<Cart />}/>
      </Routes>
   </BrowserRouter>
   
   
   </>
  )
}

export default App;
