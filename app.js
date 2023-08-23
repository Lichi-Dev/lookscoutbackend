require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 6010;
const path = require("path");
require("./db/conn");
const router = require("./Routes/router");

app.use(cors()); // Enable CORS for cross-origin requests
app.use(express.json()); // Parse JSON data in requests

app.get("/", (req, res) => {
  res.status(201).json("Server Start");
});

app.use(router);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.listen(PORT, () => {
  console.log(`Server Started at port no ${PORT}`);
});
