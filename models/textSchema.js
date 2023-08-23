const mongoose = require("mongoose");

const textSchema = new mongoose.Schema({
  text: { type: String, required: true },
});

const Text = new mongoose.model("text", textSchema);

module.exports = Text;
