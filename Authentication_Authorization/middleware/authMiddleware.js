const jwt=require('jsonwebtoken')


const secretKey="Rahufht444#43%5467"


const protect=(req,res,next)=>{
  const authHeader=req.headers["authorization"];

  const token=authHeader && authHeader.split(" ")[1];

  if(!token)return res.status(401).json({ message: "No token provided" });

  jwt.verify(token,secretKey,(err,decoded)=>{
    if (err) return res.status(403).json({ message: "Token invalid or expired" });
    req.user = decoded;
    next();
  })
}

module.exports=protect;