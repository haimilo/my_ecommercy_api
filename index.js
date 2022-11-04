const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log("Connection failed " + err);
  });

app.listen(process.env.PORT || 5000, () => {
  console.log("Server is running on port 5000");
});
