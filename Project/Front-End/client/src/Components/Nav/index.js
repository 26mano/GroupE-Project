import React, { useState } from 'react';
import Img1 from './png.png';
import { AppBar, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Box } from '@mui/system';



export default function Nav(props) {
  // const [value, setValue] = useState('');
  const [islog , setIsLog] = useState(false);
 const history = useNavigate();

  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  //   // history("/Login")
  // };



const logout =() =>{
// console.log("logout hai")

localStorage.removeItem("user");
console.log(localStorage.removeItem("user_login"));
history("/")
}
//linear-gradient(180deg, rgba(255,255,255,1) 20%, rgba(255,255,255,0) 100%)
  return (
    <div style={{ position: "static", width: "100%" }}>
      <AppBar sx={{ boxShadow: "none", backgroundColor: "white" }} >
        <Toolbar sx={{ bgcolor: "transparent" }} >
          <Typography sx={{ display: "flex", color: "#004d40", alignItems: "center", flexGrow: 1 }} >
            <img src={Img1} width="30px" height="30px" alt='img' style={{ textShadow: "1px 2px 1px 2px grey" }} />
            <h3 >TraVlogger</h3>
          </Typography>
             
             <Box sx={{color:"grey" , borderInlineEndColor:"warning"}} >
              {!islog ? 
              <>
              <Tab LinkComponent={NavLink}  to="/"        label="Home"  />
              <Tab LinkComponent={NavLink}  to="/AllBlog" label="AllBlog"  />
              <Tab LinkComponent={NavLink} to="/Register" label="Register"  />
              <Tab  LinkComponent={NavLink} to="/Login" label="Login"  />
              </> : 
              <>
              <Tab LinkComponent={NavLink}  to="/AllBlog" label="AllBlog"  />
              <Tab LinkComponent={Link} to="/MyBlog" label="MyBLog" />
              <Tab LinkComponent={NavLink} to="/ADDBlog" label="AddBlog"  />
              <Tab label="logout" onClick={logout}></Tab>
              </>}

              </Box>
         
        </Toolbar>
      </AppBar>
    </div>
  )
}
