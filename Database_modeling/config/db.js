const   mongoose= require("mongoose");

const dbConnect = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/db_modeling");
    return console.log("mongo COnnected Successfully");
  } catch (error) {
    return console.log("mongoose connection failed", error);
  }
};

module.exports = dbConnect;
