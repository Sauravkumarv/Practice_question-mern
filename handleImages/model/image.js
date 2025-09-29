  const mongoose = require("mongoose");
  const imageSchema = new mongoose.Schema(
    {
      title: {
        type: String,
        required: true,
        unique: true,
      },
      description: {
        type: String,
        required: true,
      },
      
        url: { type: String,
          required: true },
        
      
    },
    { timestamps: true }
  );

  const URL = mongoose.model("url", imageSchema);
  module.exports = URL;
