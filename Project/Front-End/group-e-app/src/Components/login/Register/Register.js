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
    localStorage.setItem("user",JSON.stringify(...data,inval));
    history("/Login");
  }

}
  return(
<div>
  
  {/* Register form start */}
  <section>
<form onSubmit={addData}>
  <input type="text" placeholder="Enter the name"  name="name" value={inval.name}  onChange={InputEvent}/>
  <br/><br/>
  <input type="email" placeholder="Enter the Email"  name="email"  value={inval.email}      onChange={InputEvent}  />
  <br/><br/>
  <input type="number" placeholder="Enter the phone"  name="phone" value={inval.phone}   onChange={InputEvent}/>
  <br/><br/>
  <input type="password" placeholder="Enter the password" name="password"  value={inval.password}   onChange={InputEvent}/>
  <br/><br/>
  <button type="submit">submit</button>
</form>
  </section>
</div>

  )
}
export default Register;