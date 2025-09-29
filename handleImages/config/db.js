const mongoose=require('mongoose')

const dbConnect=async()=>{
try {
await mongoose.connect("mongodb://127.0.0.1:27017/imageHandler")
 return  console.log("Mongo Connected Successfully")

} catch (error) {
  return console.log("mongoose connection failed", error);
}  
}

module.exports=dbConnect;