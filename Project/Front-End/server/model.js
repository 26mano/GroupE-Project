const mongoose = require("mongoose");
const studenschema = new mongoose.Schema({
    name:{type:String,require:true},
    email:{type:String,require:true,unique:true},
    password:{type:String,require:true}
}, {
    versionKey: false // You should be aware of the outcome after set to false
  })
  
  module.exports = mongoose.model("datamodel",studenschema);
 

