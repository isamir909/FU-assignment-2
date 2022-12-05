const mongoose = require("mongoose");


const regionModel=new mongoose.Schema({
   
  stateName:{type:String},
  
  avgTemperature:{type:String},
  
  avgMoisture:{type:String},
  
  climate:{type:String,enum:["dry","normal","moisture"]},

  // propertyID
  
},{timestamps:true})

module.exports=mongoose.model("region",regionModel)


// organization schema
/*{
  x
}*/

// property (org ID)

// region (pro,org)
// field (org,)