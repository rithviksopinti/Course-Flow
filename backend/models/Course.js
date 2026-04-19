const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  title: String,
  video_url: String,
  description: String
});

module.exports = mongoose.model("Course", courseSchema);