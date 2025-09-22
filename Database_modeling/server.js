const express=require('express');
const dbConnect = require('./config/db');
const router = require('./routes/userRoutes');
const cookieParser = require("cookie-parser");
const app=express();
dbConnect();

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cookieParser())
// app.get('/',(req,res)=>{
//   res.send("Hey I,m here")
// })

app.use("/",router)

const port=5885;

app.listen(port,()=>{
  console.log(`http://localhost:${port}`)
})