import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import AllBlog from './Components/Blog/AllBlog';
import MyBlog from './Components/Blog/MyBlog';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
    <BrowserRouter >
    <App />
    </BrowserRouter>

 );

// ReactDOM.render(<Home />, document.getElementById("root"));
