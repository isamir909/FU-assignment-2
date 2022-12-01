const cropModel=require("../../model/admin/crop/cropModel.js")

const createCrop=async function (req,res){
    try {
        let data=req.body
        let createData=await cropModel.create(data)
        return res.status(201).send({status:true,message:"created successfully",data:createData})

    } catch (error) {
      return res.status(500).send({ status: false, msg: error.message })
    }
}
const updateCrop=async function (req,res){
    try {
      // "cropName": "sugar cane",
      // "avgWaterRequired": "210 liter/meter",
      // "avgTemperatureRequired": "30 °C",
      // "climate": "normal",
      // "typeofCrop": 0,
        let data=req.body
        let cropid=req.params.cropid
        let findCrop=await cropModel.findOne({_id:cropid}).lean()
        if(!findCrop)return res.status(404).send({status:false,message:"crop not found "})

        if(data.cropName){findCrop.cropName=data.cropName}
        if(data.avgWaterRequired){findCrop.avgWaterRequired=data.avgWaterRequired}
        if(data.avgTemperatureRequired){findCrop.avgTemperatureRequired=data.avgTemperatureRequired}
        if(data.climate){findCrop.climate=data.climate}
        if(data.typeofCrop){findCrop.typeofCrop=data.typeofCrop}

        const updateData=await cropModel.findOneAndUpdate({_id:cropid},{$set:findCrop},{new:true})
        return res.status(200).send({status:true,message:"updated successfully",data:updateData})

    } catch (error) {
      console.log(error);
      return res.status(500).send({ status: false, msg: error.message })
    }
}
const deleteCrop=async function(req,res){
try {
    let cropid=req.params.cropid
    let findCrop=await cropModel.findOne({_id:cropid}).lean()
    if(!findCrop)return res.status(404).send({status:false,message:"crop not found "})
    findCrop.isDeleted=true
    const deleteCrop=await cropModel.findOneAndUpdate({_id:cropid},{$set:findCrop},{new:true})
    return res.status(204).send({status:true,message:"deleted successfully"})

    
} catch (error) {
  console.log(error);
  return res.status(500).send({ status: false, msg: error.message })
}
// const deleteCrop=async function(req,res){
// try {

// } catch (error) {
//   console.log(error);
//   return res.status(500).send({ status: false, msg: error.message })
// }


// const deleteCrop=async function(req,res){
// try {

// } catch (error) {
//   console.log(error);
//   return res.status(500).send({ status: false, msg: error.message })
// }
}
const createCropCycle=async function (req,res){

}
const createCropProperty=async function (req,res){

}
const createProperty=async function (req,res){

}
const createRegion=async function (req,res){

}
const createField=async function (req,res){

}

const updateField=async function (req,res){

}

module.exports={createCrop,createCropCycle,createCropProperty,createField,createRegion,createProperty,updateField,updateCrop,deleteCrop}