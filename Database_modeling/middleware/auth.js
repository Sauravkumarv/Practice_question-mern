const jwt=require('jsonwebtoken')

const secretKey="45sd4545hg$%4"

const protect=(req,res,next)=>{
  const authHeader=req.headers["authorization"]
 

  const token=authHeader && authHeader.split(" ")[1].trim();
  // const token=req.cookies.authToken;
  

  if(!token) return res.status(401).json({ message: "No token provided" });
  jwt.verify(token,secretKey,(err,decoded)=>{
    if (err) return res.status(403).json({ message: "Token invalid or expired" });
    req.user = decoded;
    next();
  })
}

module.exports=protect;