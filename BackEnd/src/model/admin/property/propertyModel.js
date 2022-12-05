const mongoose = require("mongoose");
const objectID=mongoose.Schema.Types.ObjectId

const propertyModel=new mongoose.Schema({
   
    propertyName:{type:String,unique:true},
    propertyType:{type:String,default:"farm"},
    country:{type:String},
    ownership:{type:String,enum:["owned","lease"]},
    purchaseDate:{type:String},
    leasePeriod:{type:String},
    regionID:[{type:objectID,ref:"region"}],
    fieldID:[{type:objectID,ref:"field"}],
    // orgID
},{timestamps:true})

module.exports=mongoose.model("property",propertyModel)


// userid inside book           
// bookid userid 
