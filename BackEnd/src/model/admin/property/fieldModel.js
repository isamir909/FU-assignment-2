const mongoose = require("mongoose");
const objectID=mongoose.schema.types.objectId

const fieldModel=new mongoose.schema({
    length:{type:String},

    width:{type:String},

  address:{
    plotNo:{type:String},
    landMark:{type:String},
    city:{type:String},
    pinCodeNo:{type:Number},
  },
  cropCycleHistory:{
    cropCycleID:{type:objectID,required:true,ref:"cropCycle"}

  },
 
  avgWaterAvailable:{type:String,trim:true,required:true},
  regionID:{type:objectID,required:true,ref:"region"},
  propertyID:{type:objectID,required:true,ref:"property"},

},{timestamps:true})

module.exports=mongoose.model("field",fieldModel)