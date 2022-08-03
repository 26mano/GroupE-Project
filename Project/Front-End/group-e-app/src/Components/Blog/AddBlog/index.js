import { Button, FormControl, FormGroup, FormLabel, Input, InputLabel, Stack, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React, { useState } from 'react'
import Nav from '../../Nav'
// import BlogNav from '../BlogNav'
import {  useNavigate } from 'react-router-dom';
import Allblogdata from '../AllBlog/Allblogdata';
import Myblogdata from '../MyBlog/Myblogdata';
function AddBlog() {
    let history = useNavigate();
    const[name,setName] = useState('');
    const[place,setPlace] = useState('');
    const[des,setDes] = useState('');
    const[image,setImage] = useState('');

    const Submitbutton =(e)=>{
        e.preventDefault();

  Myblogdata.push({name:name,image:image,place:place,description:des})
         history("/MyBlog")
  Allblogdata.push({name:name,image:image,place:place,description:des})
         history("/AllBlog")
    }
    return (
      
        <div >
            <Nav />
            <Stack sx={{ pt: 10 }}  >
                <Container maxWidth="md" sx={{ border: "2px solid goldenrod", p: "20px", background: "whitesmoke", borderRadius: "25px" }} >
                    <FormGroup sx={{ p: "20px" }}>
                        <FormLabel className='text-center' >ADD BLOG</FormLabel>
                        <FormControl sx={{ mt: "25px" }}>
                            <InputLabel htmlFor="my-input">Name</InputLabel>
                            <Input id="my-input" type='text' name='name' value={name} onChange={(e)=>setName(e.target.value)} />
                        </FormControl>
                        {/* <FormControl sx={{ mt: "25px" }}>
                            <InputLabel htmlFor="my-input">Profile</InputLabel>
                            <Input id="my-input"  />
                        </FormControl> */}
                        <FormControl sx={{ mt: "25px" }}>
                            <InputLabel htmlFor="my-input">Place of Visit</InputLabel>
                            <Input id="my-input"  type='text' name="place" value={place} onChange={(e)=>setPlace(e.target.value)}  />
                        </FormControl>
                        <FormControl sx={{ mt: "25px" }}>
            
                            <InputLabel htmlFor="my-input"   >Media</InputLabel>
                            <Input name='image' id="my-input" type='url' value={image} onChange={(e)=>setImage(e.target.value)} />
                        </FormControl>
                        <FormControl sx={{ mt: "25px" }} >
                            <InputLabel htmlFor="my-input" >Description</InputLabel>
                            <Input id="my-input" type='textArea' value={des} name="des" onChange={(e)=>setDes(e.target.value)} />
                        </FormControl>
                        <FormControl sx={{ mt: "40px" }} >
                            <Button variant='contained' sx={{ bgcolor: "goldenrod" }} onClick={Submitbutton} type="submit" >Submit</Button>
                        </FormControl>
                    </FormGroup>
                </Container>
            </Stack>
        </div>
    )
}

export default AddBlog