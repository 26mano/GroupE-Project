import React, { useContext, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'
import { Button, FormControl, FormGroup, Input, Stack, Typography } from '@mui/material';
import {userContext} from "../../App";

const Login = () => {

   const { dispatch} = useContext(userContext);
   const[email,setEmail] =useState('');
   const[password,setPassword] = useState('');
    const history = useNavigate();

    const addData = async(e) =>{
        e.preventDefault();
        const response = await fetch("http://localhost:8000/api/Login",{
            method:'post',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify({
                email,
                password,
            })
        })
        const data = await response.json();
        console.log(data);
        if(data.user)
        {
          
            localStorage.setItem('token',data.user)
            alert("login successfully");
            dispatch({type:"USER" , payload:true});
            history('/allblog');
            // window.location.href ="/allblog"; // rerender the entire dom


        }else {
            alert("please check your email or password");
        }
    }
    // const [inpval, setInpval] = useState({
    //     email: "",
    //     password: ""
    // })

    // const [data, setData] = useState([]);
    // console.log(inpval);

    // const getdata = (e) => {
    //     console.log(e.target.value);


    //     const { value, name } = e.target;
    //      console.log(value,name);


    //     setInpval(() => {
    //         return {
    //             ...inpval,
    //             [name]: value
    //         }
    //     })

    // }

    // const addData = (e) => {
    //     e.preventDefault();

    //     const getuserArr = localStorage.getItem("user");
    //     console.log(getuserArr);

    //     const { email, password } = inpval;
    //     if (email === "") {
    //       toast.error('email field is requred', {
    //         position: "top-center",
    //     });
    //     }else if (!email.includes("@")) {
    //         toast.error('Please Enter valid email address', {
    //           position: "top-center",
    //       });
    //       }
    //     else if (password === "") {
    //       toast.error('password field is requred', {
    //         position: "top-center",
    //     });
    //     } else if (password.length < 5) {
    //       toast.error('password field is greater than 5 requred', {
    //         position: "top-center",
    //     });
    //     } else {

    //         if (getuserArr && getuserArr.length) {
    //             const userdata = JSON.parse(getuserArr);
    //             const userlogin = userdata.filter((el, k) => {
    //                 return el.email === email && el.password === password
    //             });

    //             if (userlogin.length === 0) {
    //                 toast.error('invalid details', {
    //                     position: "top-center",
    //                 });
    //             } else {
    //                 dispatch({type:"USER" , payload:true});
    //                 console.log("user login succesfulyy");
    //                 toast.success('successful', {autoClose:3000,position:"top-center"})
    //                 localStorage.setItem("user_login", JSON.stringify(userlogin))

    //                 history("/AllBlog")
    //             }
    //         }
    //     }

    // }

    return (
        <>
        
                    <Stack sx={{display:"flex", height:'100vh', justifyContent:"center", alignItems:"center", backgroundImage:"url('https://www.habilelabs.io/wp-content/uploads/2017/09/it-background-5.jpg')", backgroundRepeat:"no-repeat", backgroundSize:"100vw"}} >
                    <form onSubmit={addData}>
                       <FormGroup sx={{ bgcolor:"wheat" , p:"55px", borderRadius:"25px" }}>
                        <Typography variant="h5" m={2} textAlign="center" >Log_in</Typography>
                        
                        <FormControl>
                        <Input type="email" placeholder='enter the email' name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        </FormControl>
                        <br/>
                        <FormControl>
                        <Input type="password" placeholder='enter the password' name="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                        </FormControl>
                        <br/>

                        <Button variant='contained' color="warning" onClick={addData} >Submit</Button>
                        
                        </FormGroup>
                        </form>
                        <ToastContainer/>
                        </Stack>

        </>
    )
}

export default Login