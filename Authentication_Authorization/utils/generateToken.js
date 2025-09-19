const jwt=require('jsonwebtoken')


const secretKey="Rahufht444#43%5467"
const refreshKey="9885695df324%$%&"

const generateAccessToken=(userId)=>{
  return jwt.sign({id:userId},secretKey,{expiresIn:"15m"})
};


const generateRefreshToken=(userId)=>{
  return jwt.sign({id:userId},refreshKey,{expiresIn:"7d"})
}

module.exports={generateAccessToken,generateRefreshToken}