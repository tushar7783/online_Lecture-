const{unauthorizedResponse} =require('../helpers/customMessage')
const Jwtauth=require('./Jwtauth')

class Token{
    async Autehticate(req,res,next){
       try {
            const bearerHearder = req.headers["authorization"];
            const bearer=bearerHearder.split(' ')
            const token=bearer[1];
            if(token){
            const decode=await Jwtauth.VerifyToken(token);
            req.user=decode

                next()
            }else{
                 unauthorizedResponse(req,res,`token not valid`)
            }
        
       } catch (error) {
        console.log(error)
       }
    }
}

module.exports=new Token().Autehticate