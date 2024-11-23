const { badRequestResponse, unauthorizedResponse } = require("../helpers/customMessage")
const userModel=require('../models/user')
class AdminOnly{
    async RolecheckAdmin(req,res,next){
        let user_id = req.user.user_id;

        const isexist=await userModel.findOne({
        
            where: {
              id: user_id,
            },
           
          })
        if(!isexist) return badRequestResponse(req,res,"Register Yourself");
        if(isexist.group_id==1){
            next()
        }
        return unauthorizedResponse(req,res,'only Admin can access');
        // if(isexist.group)
    }
}

module.exports=new AdminOnly().RolecheckAdmin