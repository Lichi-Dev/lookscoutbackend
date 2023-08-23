// Import your database models or necessary modules
const Image = require("../models/imageSchema");

// Define the controller function
const updateImage = async (req, res) => {
  const file = req.file.filename;
  try {
    const updatedImage = await Image.findOneAndUpdate(
      {},
      { image: file },
      { new: true }
    );
    res.status(201).json({ msg: "New image uploaded...!", updatedImage });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const getImage = async (req, res) => {
  try {
    const imageDoc = await Image.findOne({});

    if (!imageDoc) {
      return res.status(404).json({ error: "Image not found" });
    }
    res.status(200).json({ image: imageDoc.image });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = {
  updateImage,
  getImage,
};
