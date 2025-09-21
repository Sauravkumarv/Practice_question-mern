const express=require('express');
const dbConnect = require('./config/db');
const router = require('./routes/blogRouter');

const app=express();
dbConnect();
app.use(express.urlencoded({extended:false}));
app.use(express.json());

// app.get('/',(req,res)=>{
//   res.send("hi")
// })

app.use("/",router)

const port=8528;
app.listen(port,()=>{
  console.log(`http://localhost:${port}`)
})