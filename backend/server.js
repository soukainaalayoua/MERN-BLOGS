require("dotenv").config();
// Express us to create derver
const express = require("express");
// create express app
const app = express();
// i us cors for my frontend can access the backend
const cors = require("cors");
// parse json data in the body of req
const bodyparser = require("body-parser");
// import db function
const connectDB = require("./config/db");

// import the router for the cooking and music collections
const cookingRouter = require("./routes/cookingRouter");
const MusicRouter = require("./routes/musicRouter");
const authRoutes = require("./routes/authRoutes");
// use the middleware
app.use(bodyparser.json());
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

// defin the router
app.use("/api/cooking", cookingRouter);
app.use("/api/music", MusicRouter);
app.use("/api/auth", authRoutes);

// Connect to the database and start the server if successful
connectDB()
  .then(() => {
    const PORT = process.env.PORT || 3001;
    // Start the server and listen for requests
    app.listen(PORT, () => {
      console.log(`server is runin succefuly in port : ${PORT}`);
    });
  })
  .catch((err) => {
    // Log an error if the database connection fails
    console.log("failed to connect server", err);
  });
