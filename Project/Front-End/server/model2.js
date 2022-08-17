
const mongoose = require("mongoose");

const blogschema = new mongoose.Schema({
    name:{type:String,require:true},
    place:{type:String,require:true},
    image:{type:String,require:true},
    description:{type:String,require:true}
  }, {
    versionKey: false // You should be aware of the outcome after set to false
  })

  module.exports =  mongoose.model("blogs", blogschema);
