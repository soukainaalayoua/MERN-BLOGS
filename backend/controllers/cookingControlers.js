//Import mongoose and the Cooking model
const mongoose = require("mongoose");
const Cooking = require("../models/Cooking");

// getallcooking
const getALLcooking = async (req, res) => {
  try {
    const Allcooking = await Cooking.find();
    // Send the result back to the client
    res.status(200).json(Allcooking);
  } catch (error) {
    res.status(400).json({ err: error.message });
  }
  console.log("hello cooking");
};

// createdcooking
const createCooking = async (req, res) => {
  try {
    const newCooking = await Cooking.create(req.body);
    res.status(200).json(newCooking);
    console.log("cooking created succfuly");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// getCookingbyid
const getCookingByID = async (req, res) => {
  try {
    // Get the ID from the URL
    let { id } = req.params;
    const getCooking = await Cooking.findById(id, req.body);
    if (!getCooking) {
      return res.status(404).json({ err: "Cooking not found" });
    }
    res.status(200).json(getCooking);
  } catch (error) {
    res.status(400).json({ err: error.message });
  }
};

// updatedCooking
const updateCooking = async (req, res) => {
  try {
    let { id } = req.params;
    const cookingupdated = await Cooking.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!cookingupdated) {
      return res.status(404).json({ err: "Cooking not found to update" });
    }
    res.status(200).json(cookingupdated);
  } catch (error) {
    res.status(400).json({ err: error.message });
  }
};

// delete Cooking
const deleteCooking = async (req, res) => {
  try {
    let { id } = req.params;
    const Cookingdeleted = await Cooking.findByIdAndDelete(id);
    if (!Cookingdeleted) {
      return res.status(404).json({ err: "Cooking not found to delete" });
    }
    res.status(200).json(Cookingdeleted);
    console.log("cooking deleted succfuly");
  } catch (error) {
    res.status(400).json({ err: error.message });
  }
};
// Export functions for use in routes
module.exports = {
  getALLcooking,
  createCooking,
  getCookingByID,
  updateCooking,
  deleteCooking,
};
