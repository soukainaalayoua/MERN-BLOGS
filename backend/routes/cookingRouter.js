// Import Express and create a router
const router = require("express").Router();

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
router.post("/", createCooking);
router.get("/:id", getCookingByID);
router.patch("/:id", updateCooking);
router.delete("/:id", deleteCooking);

// Export the router so it can be used in other parts of the app

module.exports = router;
