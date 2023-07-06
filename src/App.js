// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Login from "./Login";
import Products from "./Products";
import {BrowserRouter,Route,Link}   from 'react-router-dom';
// import details from './addProducts'


function App() {
  return (
    <div >
      <BrowserRouter>
      <Link to='/'>Login</Link>
      <Link to='/product'>Products</Link>
      {/* <Link to='/'></Link> */}
      <Link to='/productdetails'>ProductDetails</Link>
      <Routes>
        <Route index element={<Login/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/product' element={<Products/>}/>
        <Route path='/addetails/:productId' element={<addDetails/>}/>
      </Routes>
      </BrowserRouter>

     

      
    </div>
  );
}

export default App;
