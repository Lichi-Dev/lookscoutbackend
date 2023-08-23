const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
  image: String,
});

const Image = new mongoose.model("image", imageSchema);

module.exports = Image;
