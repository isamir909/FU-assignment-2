const express=require("express")
const route=express.Router()
const userController=require("../controller/userController")
const passport=require('passport') 



// teacher registration
route.post("/register/user",userController.registerUser)

// teacher login
route.post("/login/user",userController.loginUser)

route.get("/dashbord",(req,res)=>{
  res.render('./sucess.html')  
})   
route.get("/failed",(req,res)=>{
  res.render('./failed.html')  
})   

//google auth page  
route.get("/google",passport.authenticate("google",{scope:["profile","email"]}))

//setting callback
route.get("/google/callback",passport.authenticate("google",{successRedirect:"http://localhost:3001/dashbord",failureRedirect:"/failed"}))

module.exports=route