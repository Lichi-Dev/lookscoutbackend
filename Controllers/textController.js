// Import your database models or necessary modules
const Text = require("../models/textSchema"); // Assuming you have a Text model

// Define the controller function
const updateText = async (req, res) => {
  try {
    const newText = req.body.newText; // Assuming you're sending the new text in the request body
    console.log("New Text:", newText);
    const updatedText = await Text.findOneAndUpdate(
      {},
      { text: newText },
      { new: true }
    );

    res.status(200).json({ message: "Text updated successfully", updatedText });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

const getText = async (req, res) => {
  try {
    const textDoc = await Text.findOne({});

    if (!textDoc) {
      return res.status(404).json({ error: "Text not found" });
    }

    res.status(200).json({ text: textDoc.text });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = {
  updateText,
  getText,
};
