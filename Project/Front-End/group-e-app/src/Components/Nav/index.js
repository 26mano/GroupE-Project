import React from 'react';
import Img1 from './png.png';
import {AppBar,Button,Toolbar, Typography} from '@mui/material';
import {Link} from 'react-router-dom';

export default function Nav() {
  return (
    <div>
        <AppBar sx={{bgcolor:"transparent" , boxShadow:"none"}} >
        <Toolbar sx={{bgcolor:"transparent"}} >
            <Typography sx={{ display:"flex" , color:"black", alignItems:"center" , flexGrow:1}} >
                <img src={Img1} width="30px" height="30px" alt='img' style={{ textShadow:"1px 2px 1px 2px grey"}} /> 
                <h3 >TraVlogger</h3>
            </Typography>
            <Button sx={{ order:0, flexGrow:10, width:"300px", pr:"10px" ,textDecoration:"none" , justifyContent:"center", color:"black"}} >Add Blog / All BLog</Button>
            {/* <Button sx={{ order:1, width:"300px", textDecoration:"none"}}>All Blog</Button/> */}
            <Link to="Login" style={{ order:1, flexGrow: 0 , paddingRight:"10px" , textDecoration:"none", color:"black" }} > <Button sx={{color:"black"}} >Sing-In/Up</Button> </Link>
            <Link to="Register" style={{ order:2 , paddingRight:"10px", textDecoration:"none" , color:"black"}} > <Button sx={{color:"black"}} >Register</Button> </Link>

        </Toolbar>
        </AppBar>
    </div>
  )
}
