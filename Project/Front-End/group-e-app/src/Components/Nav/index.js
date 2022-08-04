import React, { useState } from 'react';
import Img1 from './png.png';
import { AppBar, Button, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import { Link, NavLink } from 'react-router-dom';


export default function Nav() {
  const [value, setValue] = useState('');
  const [islog , setIsLog] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };



//linear-gradient(180deg, rgba(255,255,255,1) 20%, rgba(255,255,255,0) 100%)
  return (
    <div style={{ position: "static", width: "100%" }}>
      <AppBar sx={{ boxShadow: "none", backgroundColor: "white" }} >
        <Toolbar sx={{ bgcolor: "transparent" }} >
          <Typography sx={{ display: "flex", color: "#004d40", alignItems: "center", flexGrow: 1 }} >
            <img src={Img1} width="30px" height="30px" alt='img' style={{ textShadow: "1px 2px 1px 2px grey" }} />
            <h3 >TraVlogger</h3>
          </Typography>
         {/* {!islog ? */}
            
            <Tabs  
            onChange={handleChange}
            value={value}
            textColor="primary" 
            indicatorColor="primary"
            aria-label="primary tabs example"
             > 
             
             <Tab LinkComponent={NavLink}  to="/" label="Home"  />
              <Tab LinkComponent={NavLink}  to="/AllBlog" label="AllBlog"  />
              
           {/* <NavLink to="/AllBlog" style={{ order: 1, flexGrow: 0, paddingRight: "10px", textDecoration: "none", color: "black" }} > <Button variant='contained' size='small' sx={{ color: "White", bgcolor: "#64b5f6" }} >All Blog</Button> </NavLink> */}
           
            
              <Tab LinkComponent={NavLink} to="/Register" label="Register"  />
              {/* <NavLink to="/Register" style={{ order: 1, flexGrow: 0, paddingRight: "10px", textDecoration: "none", color: "black" }} > <Button variant='contained' size='small' sx={{ color: "White", bgcolor: "#64b5f6" }} >Register</Button> </NavLink> */}

            <Tab  LinkComponent={NavLink} to="/Login" label="Login"  />
           {/* <NavLink to="/Login" style={{ order: 1, flexGrow: 0, paddingRight: "10px", textDecoration: "none", color: "black" }} > <Button variant='contained' size='small' sx={{ color: "White", bgcolor: "#64b5f6" }} >Login</Button> </NavLink> */}

           
            {/* : */}
            
           {/* <Link to="ADDBlog" style={{ order: 1, flexGrow: 0, paddingRight: "10px", textDecoration: "none", color: "black" }} > <Button variant='contained' size='small' sx={{ color: "White", bgcolor: "#64b5f6" }} >Add Blog</Button> </Link> */}

            <Tab LinkComponent={NavLink} to="/MyBlog" label="MyBLog" />
           {/* <NavLink to="/ADDBlog" style={{ order: 1, flexGrow: 0, paddingRight: "10px", textDecoration: "none", color: "black" }}><Button variant='contained' size='small' sx={{ color: "White", bgcolor: "#64b5f6" }}>AddBlog</Button></NavLink> */}
           <Tab LinkComponent={NavLink} to="/ADDBlog" label="AddBlog"  />
           {/* <NavLink to="/MyBlog" style={{ order: 1, flexGrow: 0, paddingRight: "10px", textDecoration: "none", color: "black" }}><Button variant='contained' size='small' sx={{ color: "White", bgcolor: "#64b5f6" }}>My Blog</Button></NavLink> */}
           
           
           </Tabs>
         {/* } */}
       
         
        
         
        </Toolbar>
      </AppBar>
    </div>
  )
}
