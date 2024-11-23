const { unauthorizedResponse } = require('../helpers/customMessage');
const userModel=require('../models/user')
class InstructorOnly{
    async RolecheckInstructor(req,res,next){
    let user_id = req.user.user_id;

        const isexist=await userModel.findOne({
        
            where: {
              id: user_id,
            },
           
          })
        if(!isexist) return badRequestResponse(req,res,"Register Yourself");
        // console.log(`isexist :${isexist.name}`)
        if(isexist.group_id==3){
            next();

        }

        return unauthorizedResponse(req,res,'Only intructor can access')
        // if(isexist.group)
    }
}


module.exports=new InstructorOnly().RolecheckInstructor