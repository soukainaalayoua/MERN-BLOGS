const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/User");

// get all user
const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    if (!users.length === 0) {
      return res.status(400).json({ message: "No users found" });
    }
    res.status(200).json({ message: "users find succsufuly", users });
  } catch (error) {
    res.status(500).json({ error });
  }
};

// create new user
const createUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(200).json({ message: "user created succuful", user: newUser });
  } catch (error) {
    res.status(400).json({ error });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "invalid user" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "invalid user" });

    const token = jwt.sign({ user: user._id }, process.env.SECRET_JWT, {
      expiresIn: "1h",
    });
    res.status(200).json({ message: "login successfuly", token });
  } catch (error) {
    res.status(500).json({ error });
  }
};
module.exports = {
  getUsers,
  createUser,
  loginUser,
};
