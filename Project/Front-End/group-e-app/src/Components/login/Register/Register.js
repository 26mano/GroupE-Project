import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Register = () => {

    const history = useNavigate();

    const [inpval, setInpval] = useState({
        name: "",
        email: "",
    
        password: ""
    })

   

    const [data,setData] = useState([]);
    console.log(inpval);

    const getdata = (e) => {
       


        const { value, name } = e.target;
        

        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })

    }

    const addData = (e) => {
        e.preventDefault();

        const { name, email,  password } = inpval;

        if (name === "") {
          toast.error('name field is requred', {
            position: "top-center",
        });
        } else if (email === "") {
          toast.error('email field is requred', {
            position: "top-center",
        });
        }  else if (password === "") {
          toast.error('password field is requred', {
            position: "top-center",
        });
        } else if (password.length < 5) {
          toast.error('password field is  greater than 5 requred', {
            position: "top-center",
        });
        } else {
            console.log("data added succesfully");
            toast.error('succes', {
              position: "top-center",
          });
            history("/login")
            localStorage.setItem("user",JSON.stringify([...data,inpval]));

        }

    }

    return (
        <>
       <div>
                        <h3>Sign Up</h3>
                        <form onSubmit={addData}>
                        <input type="text" placeholder='enter the name' name="name" value={inpval.name} onChange={getdata}/>
                        <br/><br/>
                        <input type="email" placeholder='enter the email' name="email" value={inpval.email} onChange={getdata}/>
                        <br/><br/>
                        <input type="password" placeholder='enter the password' name="password" value={inpval.password} onChange={getdata}/>
                        <br/><br/>
                        <button>Submit</button>
                        </form>
                      
                        <ToastContainer/>
                       </div>

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