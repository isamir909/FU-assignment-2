const express = require("express");
const route = express.Router();
const userController = require("../controller/user/userController");
const passport = require("passport");
const adminRegisterController=require("../controller/admin/adminRegisterController")
const adminFeatureController=require("../controller/admin/adminFeatureController")
const {adminAuth}=require("../middleware/adminAuthentication")

//Admin APIs

route.post("/admin/register",adminRegisterController.registerAdmin)
route.post("/admin/login",adminRegisterController.loginAdmin)

//crop
route.post("/admin/crop",adminAuth,adminFeatureController.createCrop)
route.put("/admin/crop/:cropid",adminAuth,adminFeatureController.updateCrop)
route.delete("/admin/crop/:cropid",adminAuth,adminFeatureController.deleteCrop)


//cropCycle
route.post("/admin/createCropCycle",adminFeatureController.createCropCycleField)
// route.put("/admin/createCropCycle",adminFeatureController.createCropCycle)
// route.get("/admin/createCropCycle",adminFeatureController.createCropCycle)



//field
route.post("/admin/field",adminFeatureController.createField)
// route.put("/admin/field",adminFeatureController.updateField)
// route.get("/admin/field",adminFeatureController.updateField)

//region
route.post("/admin/create/region",adminAuth,adminFeatureController.createRegion)

//property
route.post("/admin/create/property",adminAuth,adminFeatureController.createProperty)



// USER APIs
route.post("/register/user", userController.registerUser);
route.post("/login/user", userController.loginUser);

route.get("/google",passport.authenticate("google", { scope: ["profile", "email"] }));
route.get("/google/callback",passport.authenticate("google", {successRedirect: "http://localhost:3001/dashbord",failureRedirect: "http://localhost:3001/failed"}));

module.exports = route;










































// cropProperty
// route.post("/admin/create/cropProperty",adminFeatureController.createCropProperty)
// route.put("/admin/create/cropProperty",adminFeatureController.createCropProperty)
// route.get("/admin/create/cropProperty",adminFeatureController.createCropProperty)