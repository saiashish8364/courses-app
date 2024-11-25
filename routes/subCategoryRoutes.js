const express = require("express");
const router = express.Router();
const SubCategory = require("../models/SubCategory");

// Add a new subcategory
router.post("/subcategories", async (req, res) => {
  const subCategory = new SubCategory(req.body);
  try {
    await subCategory.save();
    res.status(201).send(subCategory);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Edit a subcategory
router.patch("/subcategories/:id", async (req, res) => {
  try {
    const subCategory = await SubCategory.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!subCategory) {
      return res.status(404).send();
    }
    res.send(subCategory);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Retrieve all subcategories
router.get("/subcategories", async (req, res) => {
  try {
    const subCategories = await SubCategory.find({});
    res.send(subCategories);
  } catch (error) {
    res.status(500).send();
  }
});

module.exports = router;
