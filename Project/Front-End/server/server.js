const express = require("express");
const app = express();
const port = 8000;
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("./database/db");

//import user schema
const User = require("./model");
app.use(express.json());
app.use(cors());

//import Blog Schema
const Blog = require('./model2');



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
//AddBlog post api
app.post("/api/AddBlog",async(req,res)=>{
    try{
     const blog = await Blog.create({
     name:req.body.name,
     place:req.body.place,
     image:req.body.image,
     description:req.body.description,
     })
     console.log(req.body);
     console.log(blog);
     res.json({status:"ok",blog:true})
  
    }
    catch(err)
    {
        res.json({status:"error",error:"duplicate error"})
    }
    
})

//AllBlog get api
app.get('/api/AllBlog', (req, res, next) => {
    Blog.find(function(err,blog) {
      if(err) return next(err);
      res.jsonp(blog)
    })
  })

app.listen(port,()=>{
    console.log("done")
})