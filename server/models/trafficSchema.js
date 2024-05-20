const mongoose = require("mongoose");

const TrafficSchema = new mongoose.Schema({
  from: String,
  upto: String,
  reason: String,
  time: String, // Ensure this matches the type of the field in your MongoDB documents
});

const Traffic = mongoose.model("Traffic", TrafficSchema);
module.exports = Traffic;
