const express=require('express');
const routes=express.Router();
const AdminController=require('../controllers/adminController')

routes.post('/signup',AdminController.signup)
routes.post('/login',AdminController.loginEmail)
routes.post('/snt-otp',AdminController.sendotp)
routes.post('/vrf-otp',AdminController.verifyotp)



module.exports=routes;











module.exports=routes