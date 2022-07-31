import React from 'react';
import Img1 from './png.png';
import {AppBar,Button,Toolbar, Typography} from '@mui/material';
import {Link} from 'react-router-dom';

export default function Nav() {
  //linear-gradient(180deg, rgba(255,255,255,1) 18%, rgba(255,255,255,0.36207986612613796) 100%)
  return (
    <div style={{position:"static" , width:"100%"}}>
        <AppBar sx={{ boxShadow:"none" , background:"linear-gradient(180deg, rgba(255,255,255,1) 20%, rgba(255,255,255,0) 100%)" }} >
        <Toolbar sx={{bgcolor:"transparent"}} >
            <Typography sx={{ display:"flex" , color:"#004d40", alignItems:"center" , flexGrow:1}} >
                <img src={Img1} width="30px" height="30px" alt='img' style={{ textShadow:"1px 2px 1px 2px grey"}} /> 
                <h3 >TraVlogger</h3>
            </Typography>
            {/* <Button sx={{ order:0, flexGrow:10, width:"300px", pr:"10px" ,textDecoration:"none" , justifyContent:"center", color:"black"}} >Add Blog / All BLog</Button> */}

            <Link to="Login" style={{ order:1, flexGrow: 0 , paddingRight:"10px" , textDecoration:"none", color:"black" }} > <Button variant='contained' size='small' sx={{color:"White" ,bgcolor:"#64b5f6"}} >Login</Button> </Link>


        </Toolbar>
        </AppBar>
    </div>
  )
}
