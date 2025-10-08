const mongoose=require('mongoose')

const dbConnect=async()=>{
try {
  await mongoose.connect('mongodb://127.0.0.1:27017/socket_Io')
 return console.log("dbConnected")
} catch (error) {
  return console.log(error)
}


}

module.exports=dbConnect