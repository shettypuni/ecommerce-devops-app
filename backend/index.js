const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

//change1
require("dotenv").config();

const PORT = process.env.PORT || 5000;
const DB_HOST = process.env.DB_HOST;
// changes1 made for the .env file
app.get("/", (req, res) => {
  res.send("E-Commerce Backend is running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

