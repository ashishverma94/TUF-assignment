const mongoose = require("mongoose");
const codeSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter your name!"],
  },

  code: {
    type: String,
    required: [true, "Please enter your Code!"],
  },

  language_id: {
    type: String,
    required: [true, "Please select a language!"],
  },

  input: {
    type: String,
  },

  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("CodeData", codeSchema);
