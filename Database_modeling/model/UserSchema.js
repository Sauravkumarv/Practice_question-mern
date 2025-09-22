const mongoose = require("mongoose");
const bcrypt=require('bcrypt')

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    role: {
      type: String,
      enum: ["customer", "agent", "admin"], // RBAC ke liye
      default: "customer",
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);


userSchema.pre("save",async function(next){
if(!this.isModified("password")) return next();

this.password=await bcrypt.hash(this.password,10)

})

userSchema.methods.comparePassword=async function(enter_password){
  return await bcrypt.compare(enter_password,this.password)
}


const USER = mongoose.model("User", userSchema);

module.exports=USER;
