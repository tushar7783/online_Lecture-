const express=require('express');
const routes=express.Router();
const userController=require('../controllers/userController')
const Jwt=require('../middleware/jwtautehticate')
const RoleCheckUser=require('../middleware/userOnly')
routes.post('/signup',userController.signup)
routes.post('/login',userController.loginEmail)
routes.post('/snt-otp',userController.sendotp)
routes.post('/vrf-otp',userController.verifyotp)
routes.get('/test',Jwt,RoleCheckUser,userController.test)





module.exports=routes