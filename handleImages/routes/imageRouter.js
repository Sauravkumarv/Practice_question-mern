const express=require('express');
const { imageController } = require('../controller/imageController');
const upload = require('../middleware/multer');
const router=express.Router();

router.post('/upload',upload.single('image'),imageController)

module.exports=router;