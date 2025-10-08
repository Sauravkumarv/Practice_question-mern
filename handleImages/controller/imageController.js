const URL = require("../model/image");

const imageController=async(req,res)=>{
  try {
    const{title,description}=req.body;  

  if(!title || !description || !req.file ) return res.status(400).json({success:false,message:"All fields required"})

  const valiadtion=await URL.findOne({title});
  if(valiadtion)return res.status(409).json({success:false,message:"Data Exists"})

  const create=await URL.create({
title,
description,
img: {
  url: req.file.path,        // Cloudinary URL or local path
  public_id: req.file.filename, // Cloudinary public_id (optional)
},
  })
console.log(create)
  return res.status(201).json({success:true,message:"Data uploaded Successfully",data:{
    id:create._id,
    title:create.title,
    description:create.description,
    url:create.img.url,
    public_id:create.img.public_id,
  }})
  } catch (err) {
    console.log(err); // debug purpose
    return res.status(500).json({ success: false, error: err.message });
  }

 
}

module.exports={imageController}