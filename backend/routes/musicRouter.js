// Import Express and create a router
const router = require("express").Router();
const { protect, protectAdmin } = require("../middlewares/auth");

// Import the controller functions for handling music routes
const {
  getALLMusic,
  createMusic,
  getMusicByID,
  updateMusic,
  deleteMusic,
} = require("../controllers/musicControllers");

// Define the routes for the music collection
router.get("/", getALLMusic);
router.post("/", createMusic);
router.get("/:id", getMusicByID);
router.patch("/:id", protect, protectAdmin, updateMusic);
router.delete("/:id", protect, protectAdmin, deleteMusic);

// Export the router so it can be used in other parts of the app

module.exports = router;
