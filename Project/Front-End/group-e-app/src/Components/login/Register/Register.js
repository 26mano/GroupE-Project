import { Box, Button, Container, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
// import UserLog from './loguser.svg';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Link } from 'react-router-dom';
import "./Register.css";
// import { Icon } from '@iconify/react';

function Register(props) {

    const [values, setValues] = useState({
        password: '',
        showPassword: false,
    });

    const [confirm, setConfirm] = useState({
        confirmPassword: '',
        showConfirmPassword: false,
    });

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

    const handleConfirm = (prop) => (event) => {
        setConfirm({ ...confirm, [prop]: event.target.value });
      };

    const handleClickShowConfirmPassword = () => {
        setConfirm({
          ...confirm,
          showConfirmPassword: !confirm.showConfirmPassword,
        });
      };

    const handleMouseDownConfirmPassword = (event) => {
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
                          {/* <img src={UserLog} alt="Profile-img" width={100} style={{ alignSelf:"center" }}  /> */}
                          <Typography variant='h6' fontWeight="bold" textAlign="center" >REGISTER</Typography>
                          </Stack>
                          
                        <TextField  
                        variant='outlined' 
                        type= "tel" 
                        label= "Enter Your Mobile Number"
                        onChange={handleChange}
                        sx={{ my:"10px" }} />
                      
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

                          <FormControl sx={{ my:"10px", width:"100%" }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
                          <OutlinedInput
                            id="outlined-adornment-password"
                               type={confirm.showConfirmPassword ? 'text' : 'password'}
                            value={confirm.password}
                            onChange={handleConfirm('password')}
                            endAdornment={
                             <InputAdornment position="end">
                           <IconButton
                                aria-label="toggle password visibility"
                                 onClick={handleClickShowConfirmPassword}
                                 onMouseDown={handleMouseDownConfirmPassword}
                                 edge="end"
                                   >
                               {confirm.showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                             </InputAdornment>
                                 }
                            label="Confirm Password"
                              />
                          </FormControl>
                          
                        
                          <Button variant='contained' fullWidth  sx={{ my:"10px" }} > Register </Button>
                      </Container>
                      <Typography variant='subtitle2' mt={2} textAlign="center" > Already have a account <span ><Link to="/Login" >Login</Link>  </span></Typography>
                  </Box>
              </Stack>

            </Stack>
            
        </div>
    );
}

export default Register;