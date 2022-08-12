const express = require("express");
const app = express();
const port = 8000;
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("./database/db");
const User = require("./model");
app.use(express.json());
app.use(cors());

//register post api
app.post("/api/Register",async(req,res)=>{
    console.log(req.body)
    try{
        //  const newpassword = await bcrypt.hash(req.body.password,10);
   const user = await User.create({
    name:req.body.name,
    email:req.body.email,
    password:req.body.password,
   })
   console.log(user);
   res.json({status:"ok",user:true})
    }
    catch(err)
    {
        res.json({status:"error",error:"duplicate error"})
    }
})
//login api
app.post("/api/Login",async(req,res)=>{
    console.log(req.body)
    try
    {
const user = await User.findOne({
    email:req.body.email,
    password:req.body.password
})
if(user)
{
const token = jwt.sign(
    {
        name:user.name,
        email:user.email,
    },
    'secret123'
)
console.log(user);
res.json({status:"ok",user:token})
}
else{
    res.json({status:"error",user:false})

}


    }catch(err)
    {
        res.json({status:"error",error:'duplicated email'})
    }
})

app.listen(port,()=>{
    console.log("done")
})