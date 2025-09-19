const express=require('express');
const dbConnect = require('./config/db');
const router = require('./routes/userRouter');
const cookieParser = require("cookie-parser")

const app=express();
app.use(express.json()); 
app.use(cookieParser());
 dbConnect();

// app.use("/",(req,res)=>{
//   res.json({message:"Server Connected"})
// })
app.use('/',router)


const port=5004;

app.listen(port,()=>{
  console.log(`Server is connected on http://localhost:${port}`)
})