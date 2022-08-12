import { FormGroup,FormControl, Stack, Typography,Button, Input } from '@mui/material';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Register = () => {

  const[name,setName] = useState('');
  const[email,setEmail] = useState('');
  const[password,setPassword]= useState(''); 
  const history = useNavigate();
   
const addData =async(e) =>{
    e.preventDefault();
    const response = await fetch("http://localhost:8000/api/Register",{
        method:'post',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify({
            name:name,
            email:email,
            password:password
        })
    })
const data = await response.json();
console.log(data);
if (data.status === 'ok') {
    history('/Login')
}
}
   

    // const addData = (e) => {
    //     e.preventDefault();

    //     const { name, email,  password } = inpval;

    //     if (name === "") {
    //       toast.error('name field is requred', {
    //         position: "top-center",
    //     });
    //     } else if (email === "") {
    //       toast.error('email field is requred', {
    //         position: "top-center",
    //     });
    //     } else if (!email.includes('@')) {
    //         toast.error('Please Enter valid email address', {
    //           position: "top-center",
    //       });
    //       }
    //       else if (password === "") {
    //       toast.error('password field is requred', {
    //         position: "top-center",
    //     });
    //     } else if (password.length < 5) {
    //       toast.error('password field is  greater than 5 requred', {
    //         position: "top-center",
    //     });
    //     } else {
    //         console.log("data added succesfully");
    //         toast.error('succes', {
    //           position: "top-center",
    //       });
    //         history("/Login")
    //         localStorage.setItem("user",JSON.stringify([...data,inpval]));

    //     }

    // }




    return (
        <>
       <Stack sx={{display:"flex", height:'100vh' , justifyContent:"center", alignItems:"center", backgroundImage:"url('https://www.habilelabs.io/wp-content/uploads/2017/09/it-background-5.jpg')", backgroundRepeat:"no-repeat", backgroundSize:"100vw"}}>
                        <form onSubmit={addData}>
                        <FormGroup sx={{ bgcolor:"wheat" , p:"55px", borderRadius:"25px" }}>
                        <Typography variant="h5" m={2} textAlign="center" > Register</Typography>
                        
                      <FormControl> 
                        <Input type="text" placeholder='Enter the name' name="name" value={name} onChange={(e)=>setName(e.target.value)}/>
                      </FormControl>
                        <br />
                      <FormControl>
                        <Input type="email" placeholder='Enter the email' name="email" value={email}  onChange={(e)=>setEmail(e.target.value)}/>
                        </FormControl>
                        <br />
                        <FormControl>
                        <Input type="password" placeholder='Enter the password' name="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                        </FormControl>
                        <br />

                        <Button variant='contained' color="warning" onClick={addData} >Submit</Button>
                         <br />
                         <Typography variant='body2' > Already have account <Link to="/Login" >Longin here</Link>  </Typography>
                        </FormGroup>
                        </form>
                        <ToastContainer/>
                       
            </Stack>

            {/* <div className="container mt-3">
                <section className='d-flex justify-content-between'>
                    <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
                        <h3 className='text-center col-lg-6'>Sign Up</h3>
                        <Form >
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">

                                <Form.Control type="text" name='name' onChange={getdata} placeholder="Enter Your Name" />
                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">

                                <Form.Control type="email" name='email' onChange={getdata} placeholder="Enter email" />
                            </Form.Group>

                           

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">

                                <Form.Control type="password" name='password' onChange={getdata} placeholder="Password" />
                            </Form.Group>
                            <Button variant="primary" className='col-lg-6' onClick={addData} style={{ background: "rgb(67, 185, 127)" }} type="submit">
                                Submit
                            </Button>
                        </Form>
                        <p className='mt-3'>Already Have an Account <span><NavLink to="/login">SignIn</NavLink></span> </p>
                    </div>
                 
                </section>
               
            </div> */}
        </>
    )
}

export default Register;