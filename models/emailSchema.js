const mongoose = require("mongoose");
const validator = require("validator");

const emailSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw Error("not valid email");
      }
    },
  },
});

const Email = new mongoose.model("email", emailSchema);

module.exports = Email;
