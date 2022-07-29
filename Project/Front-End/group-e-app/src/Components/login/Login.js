import { Box, Button, Container, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import UserLog from './loguser.svg';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Link } from 'react-router-dom';
import "./Login.css";


function Login(props) {

    const [values, setValues] = useState({
        password: '',
        showPassword: false,
    });
    const [mail, setMail] = useState("");

    const handleEmailChange = (e) => {
        setMail(e.target.value);
    }

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };

    const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
      };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
    return (
        <div  >
            <div  className='bg-image'  > </div>
            <Stack sx={{position:"absolute",width:"100%", height:"100vh", justifyContent:"center" , alignItems:"center" , zIndex:20,  transform: "translate(-0%, -100%)"}} >

              <Stack  justifyContent="center" >
                  <Box sx={{ width:"100%" , height:"100%" , boxShadow:"1px 1px 6px #ccc" ,  bgcolor:"rgba(253, 255, 254, 0.807) " , padding:"20px" , borderRadius:"5px", py:7 , px:5}} >

                      <Container sx={{ display:"grid" , width:"100%" }}>
                          <Stack sx={{mb:2}} >
                          <img src={UserLog} alt="Profile-img" width={100} style={{ alignSelf:"center" }}  />
                          <Typography variant='h6' fontWeight="bold" textAlign="center" >LOG-IN</Typography>
                          </Stack>

                          
                        <TextField  
                        variant='outlined' 
                        type="email" 
                        label="Enter Your Email ID" 
                        value={mail}
                        pattern="^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"
                        onChange={handleEmailChange}
                        sx={{ my:"10px" }} 
                        required/>
                      
                        <FormControl sx={{ my:"10px", width:"100%" }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                          <OutlinedInput
                            id="outlined-adornment-password"
                               type={values.showPassword ? 'text' : 'password'}
                            value={values.password}
                            onChange={handleChange('password')}
                            endAdornment={
                             <InputAdornment position="end">
                           <IconButton
                                aria-label="toggle password visibility"
                                 onClick={handleClickShowPassword}
                                 onMouseDown={handleMouseDownPassword}
                                 edge="end"
                                   >
                               {values.showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                             </InputAdornment>
                                 }
                            label="Password"
                              />
                          </FormControl>
                            
                          
                        <Link to="/" style={{ textDecoration:"none" }} >
                        <Button variant='contained'  fullWidth  sx={{ my:"10px" }} > Login </Button>
                        </Link>
                          
                      </Container>
                      <Typography variant='subtitle2' mt={2} textAlign="center" > If you didn't have account : Register <span ><Link to="/Register" >here</Link>  </span></Typography>
                  </Box>
              </Stack>

            </Stack>
            
        </div>
    );
}

export default Login;