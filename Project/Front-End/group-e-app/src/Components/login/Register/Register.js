import { FormControl, FormGroup, Input, Stack, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import Nav from "../../Nav";

function Register() {

const[inval,setInval] = useState({
  name:"",
  email:"",
  phone:"",
  password:""
})
const[data,setData] = useState([]);
 const history =  useNavigate();
const InputEvent=(e)=>{
  e.preventDefault();
  const{value,name} = e.target
  setInval(()=>{
    return{
      ...inval,
      [name]:value
    }
  })
}
const addData=(e)=>{
  e.preventDefault();
  const{name,email,phone,password} = inval;
  console.log(inval);
  if(email==="")
  {
    alert("email is require");
  }
  else if(password==="")
  {
    alert("password is require")
  }else if(password.length<2)
  {
    alert("password is greater")
  }
  else{
    console.log("data add hai")
    localStorage.setItem('user',JSON.stringify(...data, inval));
    history("/Login");
  }

}
  return(


  <Stack sx={{display:"flex",height:"100vh", justifyContent:"center" , alignItems:"center" }}  >
      {/* Register form start */}
  <section>
      <form onSubmit={addData}>
        <FormGroup  sx={{width:"100%",height:"100%" , padding:"10px",px:"30px" , bgcolor:"wheat", marginX:"50px" , marginY:"20px", borderRadius:"25px"}} >
        <Typography variant='h5'  sx={{display:"flex" , textAlign:"center", justifyContent:"center" , margin:"20px"}} >
          REGISTER
        </Typography>
        <FormControl >
        <Input type="text" placeholder="Enter the name"  name="name" value={inval.name}  onChange={InputEvent}/>
        </FormControl>
        <br/><br/>
        <FormControl >
        <Input type="email" placeholder="Enter the Email"  name="email"  value={inval.email}      onChange={InputEvent}  />
        </FormControl>
        <br/><br/>
        <FormControl>
        <Input type="number" placeholder="Enter the phone"  name="phone" value={inval.phone}   onChange={InputEvent}/>
        </FormControl>
        <br/><br/>
        <FormControl>
        <Input type="password" placeholder="Enter the password" name="password"  value={inval.password}   onChange={InputEvent}/>
        </FormControl>
        <br/><br/>
        <Button variant="contained" color="warning" type="submit">submit</Button>
        </FormGroup>
      </form>
  </section>
  </Stack>

  )
}
export default Register;