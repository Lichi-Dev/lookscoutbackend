// Import your database models or necessary modules
const Email = require("../models/emailSchema"); // Assuming you have a Email model

// Define the controller function
const sendEmail = async (req, res) => {
  try {
    const email = req.body.email; // Assuming you're sending the new Email in the request body
    const emailData = new Email({ email });
    await emailData.save();
    res.status(200).json({ message: "Email updated successfully", emailData });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

const getAllEmail = async (req, res) => {
  try {
    const EmailDoc = await Email.find();

    if (!EmailDoc) {
      return res.status(404).json({ error: "No Email Found" });
    }

    res.status(200).json({ Email: EmailDoc });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = {
  sendEmail,
  getAllEmail,
};
