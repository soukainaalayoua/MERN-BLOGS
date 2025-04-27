// Import mongoose to interact with MongoDB
const mongoose = require("mongoose");

// Define the schema for the 'Music' collection
const cookingSchema = new mongoose.Schema(
  {
    name: String,
    description: String,
    longdescription: String,
    chef: String,
  },
  { timestamps: true }
);

// Create a model from the music schema
const Cooking = mongoose.model("Cooking", cookingSchema);

// Export the cooking model so it can be used in other parts of the application
module.exports = Cooking;
