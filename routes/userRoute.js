const express=require('express');
const routes=express.Router();
const userController=require('../controllers/userController')


routes.post('/signup',userController.signup)
routes.post('/login',userController.loginEmail)
routes.post('/snt-otp',userController.sendotp)
routes.post('/vrf-otp',userController.verifyotp)





module.exports=routes