import { Button, FormControl, FormGroup,  FormLabel, Input, InputLabel, Stack } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import BlogNav from '../BlogNav'

function AddBlog() {
  return (
    <div style={{ background:"rgba(0, 0, 0, 0.7)" , height:"100vh" }}>
            <BlogNav />
        <Stack sx={{ pt:10}}  >
            <Container maxWidth="md" sx={{ border:"2px solid goldenrod" , p:"20px",  background:"whitesmoke" , borderRadius:"25px"}} >
                <FormGroup  sx={ { p:"20px" }}>
                    <FormLabel >ADD BLOG</FormLabel>
                <FormControl sx={ { mt:"25px" }}>
                <InputLabel htmlFor="my-input">Place of Visit</InputLabel>
                <Input id="my-input"  />
                </FormControl>

                <FormControl sx={ { mt:"25px" }}>
                <InputLabel htmlFor="my-input">Image Url</InputLabel>
                <Input id="my-input" type='url' />
                </FormControl>
                <FormControl sx={ { mt:"25px" }} >
                <InputLabel htmlFor="my-input" >Description</InputLabel>
                <Input id="my-input" type='textArea'  />
                </FormControl>
                <FormControl sx={ { mt:"40px" }} >
                    <Button variant='contained' sx={{bgcolor:"goldenrod"}} >Submit</Button>
                </FormControl>
                </FormGroup>
            </Container>
        </Stack>
    </div>
  )
}

export default AddBlog