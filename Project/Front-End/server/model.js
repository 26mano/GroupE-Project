const mongoose = require("mongoose");
const studenschema = new mongoose.Schema({
    name:{type:String,require:true},
    email:{type:String,require:true,unique:true},
    password:{type:String,require:true}
})
const datamodel = new mongoose.model("datamodel",studenschema);
module.exports = datamodel;