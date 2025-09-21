const  mongoose  = require("mongoose");

const blogSchema=new mongoose.Schema({

  title: {
    type: String,
    required: true,
    trim: true,
  },
  description:{
    type: String,
    required: true,
    trim: true,
  },
  category:{
    type:String,
    enum:['science','math','english','general knowledge','general'],
    default:'general'
  },
  content: {
    type: String,
    required: true,
  }
},{timestamps:true})
 
const BLOG=mongoose.model("blog",blogSchema)
module.exports=BLOG
