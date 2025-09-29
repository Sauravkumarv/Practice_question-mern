const URL = require("../model/image");

const imageController=async(req,res)=>{
  const{title,description,url}=req.body;

  if(!title && !description && !url ) return res.status(400).json({success:false,message:"All fields required"})

  const valiadtion=await URL.findOne({title});
  if(valiadtion)return res.status(409).json({success:false,message:"Data Exists"})

  const create=await URL.create({
title,
description,
url:req.file.path,
  })

  return res.status(201).json({success:true,message:"Data uploaded Successfully",create})

 
}

module.exports={imageController}