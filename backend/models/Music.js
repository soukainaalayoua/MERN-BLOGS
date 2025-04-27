// Import mongoose to interact with MongoDB
const mongoose = require("mongoose");

// Define the schema for the 'Music' collection
const musicSchema = new mongoose.Schema(
  {
    name: String,
    description: String,
    genre: String,
  },
  { timestamps: true }
);

// Create a model from the music schema
const Music = mongoose.model("Music", musicSchema);

// Export the Music model so it can be used in other parts of the application
module.exports = Music;
