const USER = require("../model/UserSchema")
const jwt=require('jsonwebtoken')
const Token = require("../utils/GenerateToken")

const Register=async(req,res)=>{
  try {
    const {name,email,password}=req.body
    const existingUser=await USER.findOne({email})
    if(existingUser){
      return res.status(400).json({success:false,message:"User Already EXists!"})
    }
    const newUser=await USER.create({
      name,email,password
    })
    return res.status(200).json({success:true,message:"User register successfully!",user:{id:newUser._id,name:newUser.name,email:newUser.email}})
  } catch (error) {
    res.status(500).json({ message: "❌ Server error", error: error.message })
  }
}



const Login=async(req,res)=>{
try {
  const {email,password}=req.body

  const user=await USER.findOne({email})
  if(!user) return res.status(404).json({success:false,message:"Email Not Found"})

  const isMatch=await user.comparePassword(password)
  if(!isMatch) return res.status(401).json({success:false,message:"Password Wrong"})
  

  const accessToken=Token(user)

  

  res.cookie("authToken",accessToken,{
          httpOnly: false, // Frontend se access karne ke liye
      secure: false, // true in production (HTTPS)
      sameSite: "lax",
      maxAge:  60 * 60 * 1000, // 1 hour
   
  })
return res.status(200).json({
  message: "✅ Login successfull",
  accessToken, // frontend ko bhejo
  user: {
    id: user._id,
    fullname: user.fullName,
    email: user.email,
  },
})
  


} catch (error) {
  res.status(500).json({ message: "❌ Server error", error: error.message })
}

}

module.exports={Register,Login}