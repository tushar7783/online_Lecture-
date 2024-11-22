const express=require('express');
const routes=express.Router();
const instructorController=require('../controllers/instaructorController')


routes.post('/signup',instructorController.signup)
routes.post('/login',instructorController.loginEmail)
routes.post('/snt-otp',instructorController.sendotp)
routes.post('/vrf-otp',instructorController.verifyotp)





module.exports=routes