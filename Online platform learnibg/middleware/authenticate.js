require("dotenv/config")
const jwt=require("jsonwebtoken")
const secrete = process.env.SECRETE_KEY;


exports.GenrateToken=async(user)=>{
    const payload={
        user_id:user.id,
        Phone_number:user.Phone_number,
        name:user.name,
        group_id:user.group_id,
    }
    const token=jwt.sign(payload,secrete,{expiresIn:"365d"})
    return token;
}

exports.VerifyToken=async(Token)=>{
   const payload= jwt.verify(Token,secrete)
   return payload;
}




