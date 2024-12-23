const{badRequestResponse,okResponse,unauthorizedResponse}=require('../helpers/customMessage')
const UserService=require('../Services/UserService')
const User=require('../models/user')
const authenticate=require('../middleware/Jwtauth')
const path = require('path');

var otp;
exports.signup=async(req,res)=>{
    try {
        const {name,email,password,Phone_number}=req.body;
        const hashpassword=await UserService.hashpassword(password);
        const phoneRegex = /^\+?[0-9]{10,15}$/;
        console.log(Phone_number)
    if (!phoneRegex.test(Phone_number)) {
      return badRequestResponse(req,res,"Provide valid Phone Number");
    }
        const user=await User.create({name:name,email:email,password:hashpassword,Phone_number:Phone_number,group_id:3})

        if(!user) return badRequestResponse(req,res,"Something Went Wrong")
        
            return okResponse(req,res,'User Created');

        
    } catch (error) {
        console.log(error)
        return badRequestResponse(req,res,error.message)
    }
}

exports.loginEmail=async(req,res)=>{
    try {
        const{email,password}=req.body;
        const user=await UserService.userByEmail(email)
        const hash=await UserService.hashpassword(password);
        console.log(user);
        if(user.password!=hash) return badRequestResponse(req,res,"Invalid Password")

        const token=await authenticate.GenrateToken(user);
        if(!token) return badRequestResponse(req,res,"Something went wrong")
        // token to databasse
        
         okResponse(req,res,`Token:${token}`)
        
        
        
    } catch (error) {
        console.log(error)
        return badRequestResponse(req,res,error.message)

    }
}


exports.sendotp=async(req,res)=>{
    try {
        const{Phone_number}=req.body;
        const phoneRegex = /^\+?[0-9]{10,15}$/;
        const user=await UserService.findByNumber(Phone_number)
        if(!user) return badRequestResponse(req,res,'User Not found')
        console.log(Phone_number)
    if (!phoneRegex.test(Phone_number)) {
      return badRequestResponse(req,res,"Provide valid Phone Number");
    }

    otp=Math.floor(1000+Math.random()*9000);
    if(!otp) return badRequestResponse(req,res,"Something went wrong")
        okResponse(req,res,`Otp:${otp}`);




        
    } catch (error) {
        console.log(error)
        return badRequestResponse(req,res,error.message)
    }
}
exports.verifyotp=async(req,res)=>{
    try {
        const{Phone_number,OTP}=req.body
        const user=await UserService.findByNumber(Phone_number)
        if(!user)return badRequestResponse(req,res,'Something Went Wrong');
        if(otp!=OTP) return unauthorizedResponse(req,res,'otp invalid');
        const Token =await authenticate.GenrateToken(user);
        if(!Token) return badRequestResponse(req,res,"Something went wrong")
            // token to databasse
            
             okResponse(req,res,`Token:${Token}`)
        
    } catch (error) {
        console.log(error)
        return badRequestResponse(req,res,error.message)
    }
}

exports.uploadSingle=async(req,res)=>{
    try {
        console.log(req.file);
        if (!req.file) {
            return badRequestResponse(req,res,'No file uploaded!')
          }
          const fileDetails = {
            name: req.file.filename,
            path: path.join('/uploads', req.file.filename),
            size: req.file.size,
          };

          if(fileDetails) return okResponse(req,res,`message: 'File uploaded successfully!',
            file: ${fileDetails}`)
        
    } catch (error) {
        console.log(error)
        return badRequestResponse(req,res,error.message)

    }
}

exports.test=async(req,res)=>{
    console.log("okkk")
    return okResponse(req,res,"OKZZZ")
}