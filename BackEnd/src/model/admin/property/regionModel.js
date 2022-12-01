const mongoose = require("mongoose");


const regionModel=new mongoose.schema({
   
  stateName:{type:String},
  
  avgTemperature:{type:String},
  
  avgMoisture:{type:String},
  
  climate:{type:String,enum:["dry","normal","moisture"]},
  
},{timestamps:true})

module.exports=mongoose.model("region",regionModel)