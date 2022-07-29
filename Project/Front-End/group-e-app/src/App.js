import React from 'react';
import { Route, Routes } from 'react-router';
import './App.css';
// import Footer from './Components/Footer';


// Pages
import Home from './Components/Home/index';
import Login from './Components/login/Login.js';
import Register from "./Components/login/Register/Register.js";
// import Nav from './Components/Nav';


function App() {
  return (
<div>
     <Routes>
      
     <Route path="/" element={<Home />} /> 
     <Route path="/Login" element={<Login />} /> 
     <Route path="/Register" element={<Register />} /> 
   
    </Routes>

   </div>
  );
}

export default App;
