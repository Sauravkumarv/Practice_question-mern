const http=require("http")
const express=require('express');
const dbConnect = require("./config/db");
const path=require('path')
const {Server}=require('socket.io');
const { Socket } = require("dgram");

const app=express();
const server=http.createServer(app)
dbConnect();

app.use(express.static(path.resolve("./public")))
const io=new Server(server)

io.on("connection",(socket)=>{
    socket.on("user-message",(message)=>{
      io.emit("message",message)
    })
})





app.get('/',(req,res)=>{
  return res.sendFile("/public/index.html")
})

 const port=4000;
server.listen(port,()=>{
  console.log(`http://localhost:${port}`)
})