const { badRequestResponse, unauthorizedResponse } = require("../helpers/customMessage");
const userModel=require('../models/user')

class UserOnly{
    async  RolecheckUser(req,res,next){
        let user_id=req.user.user_id;
        const isexist=await userModel.findOne({where:{id:user_id}})
        if(!isexist) return badRequestResponse(req,res,"Register Yourself")
        
        if(isexist.group_id==2){
            next()
        }

        return unauthorizedResponse(req,res,"Omly Student can access");

    }
}


module.exports=new UserOnly().RolecheckUser