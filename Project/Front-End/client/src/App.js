import React, { createContext, useContext, useReducer } from 'react';
import { Route, Routes } from 'react-router';
import './App.css';
// import AllBloges from './Components/Allblog/AllBloges';
// import AllBlog from './Components/Allblog/AllBloges';
// import Allblog from './Components/Allblog/';
import AddBlog from './Components/Blog/AddBlog';
import AllBlogs from './Components/Blog/AllBlog';
import MyBlog from './Components/Blog/MyBlog';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; 
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'; 

import {reducer, initialState} from "./reducer/UseReducer"

// import Footer from './Components/Footer';


// Pages
import Home from './Components/Home/index';
import Login from './Components/login/Login.js';
import Register from "./Components/login/Register/Register.js";
import Nav from './Components/Nav';
// import Nav from './Components/Nav';

 export const userContext = createContext();
 
 const Routing = () => {
  return (
    <Routes>
     <Route path="/" element={<Home />} /> 
     <Route path="/Login" element={<Login />} /> 
     <Route path="/Register" element={<Register />} /> 

     {/* ----------------------------------- */}
     <Route path="/AllBlog" element={<AllBlogs />} /> 
     <Route path="/MyBlog" element={<MyBlog />} /> 
     <Route path="/ADDBlog" element={<AddBlog />} /> 
     <Route path="/ADDBlog/Edit/:blogId" element={<AddBlog />} /> 

    </Routes>
  )
 }

function App() {
const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <userContext.Provider  value={{state, dispatch}} >
      < Nav />
      <Routing />
      </userContext.Provider>

    </div>
  );
}

export default App;
