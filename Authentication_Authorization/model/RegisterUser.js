const { default: mongoose } = require("mongoose");
const bcrypt=require('bcrypt')

const userSchema=new mongoose.Schema({
  email:{
    type:String,
    required:true,
    unique:true,
  },
  password:{
    type:String,
    required:true,
      }
},{timestamps:true})


userSchema.pre("save",async function(next){
if(!this.isModified("password")) return next();

this.password=await bcrypt.hash(this.password,10)
next();

})

userSchema.methods.comparePassword=async function(enterPassword){
  return await bcrypt.compare(enterPassword,this.password)
}

const USER=mongoose.model("user",userSchema)
module.exports=USER;