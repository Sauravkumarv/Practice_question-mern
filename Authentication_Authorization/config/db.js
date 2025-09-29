const mongoose=require('mongoose')

const dbConnect=async()=>{
  try {
    const connect=await mongoose.connect("mongodb://127.0.0.1:27017/practiceDb")
   console.log("mongo Connected Successfully")
  } catch (error) {
    return console.log("mongo connection failed",error)
  }
}

module.exports=dbConnect;