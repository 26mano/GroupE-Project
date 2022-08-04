import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const history = useNavigate();

    const [inpval, setInpval] = useState({
        email: "",
        password: ""
    })

    const [data, setData] = useState([]);
    console.log(inpval);

    const getdata = (e) => {
        console.log(e.target.value);


        const { value, name } = e.target;
         console.log(value,name);


        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })

    }

    const addData = (e) => {
        e.preventDefault();

        const getuserArr = localStorage.getItem("user");
        console.log(getuserArr);

        const { email, password } = inpval;
        if (email === "") {
          toast.error('email field is requred', {
            position: "top-center",
        });
        }else if (password === "") {
          toast.error('password field is requred', {
            position: "top-center",
        });
        } else if (password.length < 5) {
          toast.error('password field is greater than 5 requred', {
            position: "top-center",
        });
        } else {

            if (getuserArr && getuserArr.length) {
                const userdata = JSON.parse(getuserArr);
                const userlogin = userdata.filter((el, k) => {
                    return el.email === email && el.password === password
                });

                if (userlogin.length === 0) {
                    toast.error('invalid details', {
                        position: "top-center",
                    });
                } else {
                    console.log("user login succesfulyy");
                    toast.success('successful', {autoClose:3000,position:"top-center"})
                    localStorage.setItem("user_login", JSON.stringify(userlogin))

                    history("/AllBlog")
                }
            }
        }

    }

    return (
        <>
        
                    <div>
                        <h3>Sign Up</h3>
                        <form onSubmit={addData}>
                       
                        <input type="email" placeholder='enter the email' name="email" value={inpval.email} onChange={getdata}/>
                        <br/><br/>
                        <input type="password" placeholder='enter the password' name="password" value={inpval.password} onChange={getdata}/>
                        <br/><br/>
                        <button>Submit</button>
                        </form>
                       
                        <ToastContainer/>
                        </div>

        </>
    )
}

export default Login