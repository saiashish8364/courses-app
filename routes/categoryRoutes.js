const express = require("express");
const router = express.Router();
const Category = require("../models/Category");
const Course = require("../models/Course");

// Adding category
router.post("/categories", async (req, res) => {
  const category = new Category(req.body);
  try {
    await category.save();
    res.status(201).send(category);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Editing category
router.patch("/categories/:id", async (req, res) => {
  try {
    const category = await Category.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!category) {
      return res.status(404).send();
    }
    res.send(category);
  } catch (error) {
    res.status(400).send(error);
  }
});

// get categories
router.get("/categories", async (req, res) => {
  try {
    const categories = await Category.find({});
    res.send(categories);
  } catch (error) {
    res.status(500).send();
  }
});

//get categories with subcategory counts

router.get("/categories-with-subcategory-counts", async (req, res) => {
  try {
    const result = await Category.aggregate([
      {
        $lookup: {
          from: "subcategories",
          localField: "_id",
          foreignField: "category",
          as: "subCategories",
        },
      },
      { $project: { name: 1, subCategoryCount: { $size: "$subCategories" } } },
    ]);

    if (result.length === 0) {
      return res.status(404).send({ message: "No categories found" });
    }

    const deleteResult = await Course.deleteMany({});

    const insertResult = await Course.insertMany(result);

    res.send(insertResult);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send(error);
  }
});

module.exports = router;
