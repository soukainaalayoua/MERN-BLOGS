// Import Express and create a router
const router = require("express").Router();
const { protect, protectAdmin } = require("../middlewares/auth");

// Import the controller functions for handling cooking routes

const {
  getALLcooking,
  createCooking,
  getCookingByID,
  updateCooking,
  deleteCooking,
} = require("../controllers/cookingControlers");

// Define the routes for the music collection

router.get("/", getALLcooking);
router.post("/", protect, protectAdmin, createCooking);
router.get("/:id", getCookingByID);
router.patch("/:id/", protect, protectAdmin, updateCooking);
router.delete("/:id/", protect, protectAdmin, deleteCooking);

// Export the router so it can be used in other parts of the app

module.exports = router;
