const express=require('express');
const dbConnect = require('./config/db');
const router = require('./routes/imageRouter');
const path=require('path')
const app=express();


dbConnect();
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


app.get('/',(req,res)=>{
  res.send("Hi")
})

app.use('/',router)

const port=4555;

app.listen(port,()=>{
  console.log(`http://localhost:${port}`)
})