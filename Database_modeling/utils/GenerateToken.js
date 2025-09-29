
const jwt=require("jsonwebtoken")
const secretKey="45sd4545hg$%4"

const Token=(user)=>{
  return  jwt.sign({Id:user._id,email:user.email},secretKey,{expiresIn:"1h"})

  
}

module.exports=Token