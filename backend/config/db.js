const mongoose = require("mongoose");

// Load environment variables from the .env file
require("dotenv").config();

// Function to connect to the MongoDB database
const connectDB = async () => {
  // Get the MongoDB connection URL from the environment variables

  const MONGO_URL = process.env.MONGO_URL;
  try {
    await mongoose.connect(MONGO_URL);
    console.log("database connected succfuly");
  } catch (error) {
    console.log("failed to connect to database", error);
    process.exit(1);
  }
};

module.exports = connectDB;
