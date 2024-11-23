const express=require('express');
const routes=express.Router();
const instructorController=require('../controllers/instaructorController')
const jwt=require('../middleware/jwtautehticate')
const RolecheckInstructor=require('../middleware/InstructorOnly')


routes.post('/signup',instructorController.signup)
routes.post('/login',instructorController.loginEmail)
routes.post('/snt-otp',instructorController.sendotp)
routes.post('/vrf-otp',instructorController.verifyotp)
routes.get('/test2',jwt,instructorController.test)


routes.get('/test',jwt,RolecheckInstructor,instructorController.test)
// routes.post("/test",jwt,RolecheckAdmin,instructorController.test)





module.exports=routes