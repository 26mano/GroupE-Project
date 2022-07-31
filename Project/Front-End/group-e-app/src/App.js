import React from 'react';
import { Route, Routes } from 'react-router';
import './App.css';
import AddBlog from './Components/Blog/AddBlog';
import AllBlogs from './Components/Blog/AllBlog';
import MyBlog from './Components/Blog/MyBlog';
// import Footer from './Components/Footer';


// Pages
import Home from './Components/Home/index';
import Login from './Components/login/Login.js';
import Register from "./Components/login/Register/Register.js";
// import Nav from './Components/Nav';


function App() {
  return (
<div>
  {/* <Blog /> */}
     <Routes>
     <Route path="/" element={<Home />} /> 
     <Route path="/Login" element={<Login />} /> 
     <Route path="/Register" element={<Register />} /> 

     {/* ----------------------------- */}
     {/* <Route path='/Login/AllBlogs' element={<Blog/>}  /> */}
     {/* ----------------------------------- */}
     <Route path="/Login/AllBlog" element={<AllBlogs />} /> 
     <Route path="/AllBlog" element={<AllBlogs />} /> 
     <Route path="/MyBlog" element={<MyBlog />} /> 
     <Route path="/ADDBlog" element={<AddBlog />} /> 


    </Routes>

   </div>
  );
}

export default App;
