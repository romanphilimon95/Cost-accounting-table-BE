const mongoose = require("mongoose");

const { Schema } = mongoose;

const taskScheme = new Schema({
  shop: String,
  date: String,
  amount: String
});

module.exports = Note = mongoose.model("tasks", taskScheme);
