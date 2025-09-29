const  express = require("express");
const { CreateNewBlog, UpdateBlog, deleteBlog, getBlog } = require("../controller/blogController");

const router=express.Router();

router.post('/create',CreateNewBlog)
router.patch('/:id/update',UpdateBlog)
router.delete('/:id/delete',deleteBlog)
router.get('/blogs',getBlog)


module.exports=router