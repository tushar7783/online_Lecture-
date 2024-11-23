const express=require('express');
const routes=express.Router();
const AdminController=require('../controllers/adminController')
const Jwt=require('../middleware/jwtautehticate')
const RolecheckAdmin=require('../middleware/adminOnly')

routes.post('/signup',AdminController.signup)
routes.post('/login',AdminController.loginEmail)
routes.post('/snt-otp',AdminController.sendotp)
routes.post('/vrf-otp',AdminController.verifyotp)
routes.get('/test',Jwt,RolecheckAdmin,AdminController.test)


module.exports=routes;











module.exports=routes