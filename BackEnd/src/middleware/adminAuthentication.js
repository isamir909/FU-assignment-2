const jwt = require('jsonwebtoken');
const adminModel=require("../model/admin/adminModel")
const adminAuth=async function(req,res,next){
    
try {
  let token=req.headers.authorization
  if(!token) return res.status(400).send({status:false,message:"Token is required, please login"});
  let newToken = token.replace('Bearer ',"")
  let decodedToken = jwt.verify(newToken, "school@#$%^&*Management")
  if (!decodedToken) return res.status(401).send({ status: false, msg: "Authentication failed" });
  
  const findAdmin=await adminModel.findById(decodedToken.id)
  if(!findAdmin)return res.status(404).send({status:false,message:"user not found "})
  req.body["adminID"]=decodedToken.id
 
    next();

} catch (error) {
  console.log(error);
    return res.status(500).send({ status: false, msg: error.message })
}

}
module.exports={adminAuth}