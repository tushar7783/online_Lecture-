const {createHmac} =require('crypto')
const userModel=require('../models/user')

module.exports=class User{
    
static async hashpassword(password){
    try {
        const salt=process.env.SALT
      const hashpass=createHmac('sha256',salt).update(password).digest('hex');
      return hashpass
        
    } catch (error) {
        console.log(err)
    }
}
static async userByEmail(email){
    try {
        const user=await userModel.findOne({where:{email:email}});
        return user;
    } catch (error) {
        console.log(error)
    }
}

static async findByNumber(Phone_number){
    try {
        const user=await userModel.findOne({where:{Phone_number:Phone_number}})
        return user;
        
    } catch (error) {
        console.log(error)
        
    }
}
}

// module.exports=new User();