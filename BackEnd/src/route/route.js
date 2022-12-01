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


route.post("/admin/crop",adminAuth,adminFeatureController.createCrop)
route.put("/admin/crop/:cropid",adminAuth,adminFeatureController.updateCrop)
route.delete("/admin/crop/:cropid",adminAuth,adminFeatureController.deleteCrop)



route.post("/admin/create/createCropCycle",adminFeatureController.createCropCycle)
route.put("/admin/create/createCropCycle",adminFeatureController.createCropCycle)
route.get("/admin/create/createCropCycle",adminFeatureController.createCropCycle)

route.post("/admin/create/cropProperty",adminFeatureController.createCropProperty)
route.put("/admin/create/cropProperty",adminFeatureController.createCropProperty)
route.get("/admin/create/cropProperty",adminFeatureController.createCropProperty)


route.post("/admin/create/field",adminFeatureController.createField)
route.put("/admin/update/field",adminFeatureController.updateField)
route.get("/admin/update/field",adminFeatureController.updateField)

route.post("/admin/create/region",adminFeatureController.createRegion)
route.post("/admin/create/property",adminFeatureController.createProperty)



// USER APIs
route.post("/register/user", userController.registerUser);
route.post("/login/user", userController.loginUser);

route.get("/google",passport.authenticate("google", { scope: ["profile", "email"] }));
route.get("/google/callback",passport.authenticate("google", {successRedirect: "http://localhost:3001/dashbord",failureRedirect: "http://localhost:3001/failed"}));

module.exports = route;
