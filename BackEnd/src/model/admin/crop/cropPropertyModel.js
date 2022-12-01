const mongoose = require("mongoose");
const objectID=mongoose.schema.types.objectId

const cropPropertyModel=new mongoose.schema({
  
  propertyID:{type:objectID,required:true,ref:"property"},


},{timestamps:true})

module.exports=mongoose.model("cropProperty",cropPropertyModel) 