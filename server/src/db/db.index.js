require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URL}`
    );
    console.log(
      `\nmongoDB Connected ! DB Host ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log(`MongoDB connection Failed !!!`);
    console.log(error);
    process.exit(1);
  }
};

module.exports = {
  connectDB,
};
