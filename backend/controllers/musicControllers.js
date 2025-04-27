const mongoose = require("mongoose");
const Music = require("../models/Music");

// getAllMusic
const getALLMusic = async (req, res) => {
  try {
    const AllMusic = await Music.find();
    res.status(200).json(AllMusic);
  } catch (error) {
    res.status(400).json({ err: error.message });
  }
};

// sreateMusic
const createMusic = async (req, res) => {
  try {
    const newMusic = await Music.create(req.body);
    res.status(200).json(newMusic);
    console.log("music created succfuly");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// getMusicbyid
const getMusicByID = async (req, res) => {
  try {
    let { id } = req.params;
    const getMusic = await Music.findById(id);
    if (!getMusic) {
      return res.status(404).json({ err: "Music not found" });
    }
    res.status(201).json(getMusic);
  } catch (error) {
    res.status(400).json({ err: error.message });
  }
};

// updateMusic
const updateMusic = async (req, res) => {
  try {
    let { id } = req.params;
    const Musicupdated = await Music.updateOne({ _id: id }, req.body);
    if (Musicupdated.nModified === 0) {
      return res.status(404).json({ err: "Music not found to update" });
    }
    res.status(200).json(Musicupdated);
  } catch (error) {
    res.status(400).json({ err: error.message });
  }
};

// delete Music
const deleteMusic = async (req, res) => {
  try {
    // Get the ID from the URL
    let { id } = req.params;
    const musicdeleted = await Music.findByIdAndDelete(id);
    if (!musicdeleted) {
      return res.status(404).json({ err: "Music not found to delete" });
    }
    res.status(200).json(musicdeleted);
  } catch (error) {
    res.status(400).json({ err: error.message });
  }
};

// Export functions for use in routes
module.exports = {
  getALLMusic,
  createMusic,
  getMusicByID,
  updateMusic,
  deleteMusic,
};
