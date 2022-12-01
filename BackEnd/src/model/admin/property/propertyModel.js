const mongoose = require("mongoose");
const objectID=mongoose.schema.types.objectId

const propertyModel=new mongoose.schema({
   
    propertyType:{type:String,default:"farm"},
    country:{type:String},
    ownership:{type:String,enum:["owned","lease"]},
    purchaseDate:{type:String},
    leasePeriod:{type:String},
    regionID:{type:objectID,required:true,ref:"region"}

},{timestamps:true})

module.exports=mongoose.model("property",propertyModel)