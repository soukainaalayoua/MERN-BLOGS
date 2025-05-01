const router = require("express").Router();
const {
  getUsers,
  createUser,
  loginUser,
} = require("../controllers/authController");
const { protect, protectAdmin } = require("../middlewares/auth");

router.get("/", protect, getUsers);
router.post("/signup", createUser);
router.post("/login", loginUser);

module.exports = router;
