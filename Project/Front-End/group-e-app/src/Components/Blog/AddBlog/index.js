import { Button, FormControl, FormGroup, FormLabel, Input, InputLabel, Stack } from '@mui/material'
import { Container } from '@mui/system'
import React, { useState } from 'react'
import Nav from '../../Nav'
// import BlogNav from '../BlogNav'
import {  useNavigate, useParams } from 'react-router-dom';

function AddBlog() {
    const existingData = JSON.parse(localStorage.getItem('data'));
    const {blogId} = useParams();
    let history = useNavigate();
    const[name,setName] = useState(blogId? existingData[blogId].name: "");
    const[place,setPlace] = useState(blogId? existingData[blogId].place: "");
    const[des,setDes] = useState(blogId? existingData[blogId].description: "");
    const[image,setImage] = useState(blogId? existingData[blogId].image: "");

    
    const Submitbutton =(e)=>{

        e.preventDefault();
       
        if(existingData){
            console.log(existingData[existingData.length-1].id);
            localStorage.setItem('data', JSON.stringify([...existingData,{id:parseInt(existingData[existingData.length-1].id+1), user: '123', name:name,image:image,place:place,description:des} ]))
            history("/MyBlog")                                                                       
                                                                                     //5  //Id - 0,1,2
        }else {
            localStorage.setItem('data', JSON.stringify([{id:0, user: '123', name:name,image:image,place:place,description:des} ]))
            history("/MyBlog")
        }
        
    }
    const UpdateButton =(e)=>{

        e.preventDefault();
        
        const Removed = existingData.filter((datas) => (
            (datas.id) != (blogId)
        ))
        
            console.log(blogId);
           console.log(Removed);
        console.log(existingData);

        localStorage.setItem('data', JSON.stringify([...Removed, {id:parseInt(blogId), user: "123", name:name,image:image,place:place,description:des} ]))
        history("/MyBlog")
       
        // if(existingData){
        //     localStorage.setItem('data', JSON.stringify([...existingData,{id:existingData.length, user: '123', name:name,image:image,place:place,description:des} ]))
        //     history("/MyBlog")
        // }else {
        //     localStorage.setItem('data', JSON.stringify([{id:0, user: '123', name:name,image:image,place:place,description:des} ]))
        //     history("/MyBlog")
        // }

    }

    return (
      
        <div >
            <Nav />
            <Stack sx={{ pt: 10 }}  >
                <Container maxWidth="md" sx={{ border: "2px solid goldenrod", p: "20px", background: "whitesmoke", borderRadius: "25px" }} >
                    <FormGroup sx={{ p: "20px" }}>
                        <FormLabel className='text-center' >{blogId ? "EDIT BLOG": "ADD BLOG"}</FormLabel>
                        <FormControl sx={{ mt: "25px" }}>
                            <InputLabel htmlFor="my-input">Name</InputLabel>
                            <Input id="my-input" type='text' name='name' value={name} onChange={(e)=>setName(e.target.value)} />
                        </FormControl>

                        <FormControl sx={{ mt: "25px" }}>
                            <InputLabel htmlFor="my-input">Place of Visit</InputLabel>
                            <Input id="my-input"  type='text' name="place" value={place} onChange={(e)=>setPlace(e.target.value)}  />
                        </FormControl>
                        <FormControl  sx={{ mt: "25px" }}>

                            <InputLabel htmlFor="my-input"   >Media</InputLabel>
                            <Input name='image' id="my-input" type='url' value={image} onChange={(e)=>setImage(e.target.value)} />
                        </FormControl>
                        <FormControl sx={{ mt: "25px" }} >
                            <InputLabel htmlFor="my-input" >Description</InputLabel>
                            <Input id="my-input" type='textArea' value={des} name="des" onChange={(e)=>setDes(e.target.value)} />
                        </FormControl>
                        <FormControl sx={{ mt: "40px" }} >
                            <Button variant='contained' sx={{ bgcolor: "goldenrod" }} onClick={blogId? UpdateButton:Submitbutton} type="submit" >{blogId ? "Update" : "Add"}</Button>
                        </FormControl>
                    </FormGroup>
                </Container>
            </Stack>
        </div>
    )
}

export default AddBlog