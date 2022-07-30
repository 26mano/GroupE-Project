import { AppBar, Avatar,  Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

//background: linear-gradient(343deg, rgba(49,181,255,1) 0%, rgba(253,245,75,1) 100%);

function BlogNav(Props) {
  return (
    <div >
        <AppBar>
            <Toolbar sx={{display:"flex", background:"linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)"}}>  

                <Avatar alt="Profile Pic" src="/" />
                <Typography variant='h6' p={1} sx={{ flexGrow:1 }}>Profile Name</Typography>

                <Link to="AllBlog" style={{ flexGrow:0 , textDecoration:"none" , color:"white", paddingRight:"10px" }} >ALL BLOGS</Link>
                <Link to="MyBlog" style={{ flexGrow:0 , textDecoration:"none" , color:"white", paddingRight:"10px" }}>MY BLOGS</Link>
                <Link to="/" style={{ flexGrow:0 , textDecoration:"none" , color:"white", paddingRight:"10px" }} >ADD BLOG</Link>
                <Link to="/" type='button' style={{ flexGrow:0 , textDecoration:"none" , color:"Black", marginRight:"10px", padding:"5px" , backgroundColor:"gold" ,alignItems:"center" ,textAlign:"center", borderRadius:"10%"}}>
                    {/* <Button variant='contained' color='warning' size='small' > LOG-OUT </Button>  */} <Typography variant='body2' fontWeight={700} >LOGOUT</Typography>
                    </Link>

            </Toolbar>
        </AppBar>
    </div>
  )
}

export default BlogNav