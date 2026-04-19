const router = require("express").Router();
const Course = require("../models/Course");

// GET all
router.get("/", async (req, res) => {
  const courses = await Course.find();
  res.json(courses);
});

// CREATE
router.post("/", async (req, res) => {
  const course = await Course.create(req.body);
  res.json(course);
});

// DELETE
router.delete("/:id", async (req, res) => {
  await Course.findByIdAndDelete(req.params.id);
  res.json("Deleted");
});

module.exports = router;