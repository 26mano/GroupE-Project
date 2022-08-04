import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom'

const Login=()=>{
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

const addData = (e) => {
    e.preventDefault();
const getuser = localStorage.getItem("user");
    // console.log(getuser);

    const { email, password } = inval;
 console.log(inval);
 const userdata = JSON.parse(getuser);
const userone = userdata.filter((el)=>{
return el.email === email && el.password === password
})
console.log(userdata);
}
  return(
   
    <>
  <form onSubmit={addData}>
  <input type="email" placeholder="Enter the Email"  name="email"  value={inval.email}      onChange={InputEvent}  />
  <br/><br/>
 
  <input type="password" placeholder="Enter the password" name="password"  value={inval.password}   onChange={InputEvent}/>
  <br/><br/>
  <button type="submit">submit</button>
  </form>
    </>
  )
}
export default Login