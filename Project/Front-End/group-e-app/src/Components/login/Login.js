import { FormControl, FormGroup, Input , Stack, Button, Typography} from '@mui/material';
import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom'

const Login=()=>{
  const getuser = localStorage.getItem('user');
  const history = useNavigate();

  const [inval, setInval] = useState({
      email: "",
      password: ""
  })

  const [data, setData] = useState([]);
  console.log(inval);
  const InputEvent = (e) => {

    const { value, name } = e.target;

    setInval(() => {
        return {
            ...inval,
            [name]: value
        }
    })

}

const validateData = (e) => {
    e.preventDefault();
    // console.log(getuser);

    const { email, password } = inval;
    //  console.log(inval)
    const userdata = JSON.parse(getuser);
    const userone = userdata.filter((el) => (
     el.email === email && el.password === password
    ));
    // console.log(getuser);
    console.log(userone);
    }
  return(
   
    <>
  <Stack sx={{display:"flex",height:"100vh", justifyContent:"center" , alignItems:"center" }} >
        <form onSubmit={validateData}>
          <FormGroup sx={{width:"100%",height:"100%" , padding:"10px",px:"30px" , bgcolor:"wheat", marginX:"50px" , marginY:"20px", borderRadius:"25px"}} >
            <Typography variant='h5'  sx={{display:"flex" , textAlign:"center", justifyContent:"center" , margin:"20px"}} >
              LOG_IN
            </Typography>
            
            <FormControl >
            <Input type="email" placeholder="Enter the Email"  name="email"  value={inval.email}      onChange={InputEvent}  />
            </FormControl>
            <br/><br/>
            <FormControl >
            <Input type="password" placeholder="Enter the password" name="password"  value={inval.password}   onChange={InputEvent}/>
            </FormControl>
            <br/><br/>
            <Button variant="contained" color="warning" type="submit">submit</Button>
          </FormGroup>
        </form>
  </Stack>
    </>
  )
}
export default Login