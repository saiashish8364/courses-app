const mongoose = require("mongoose");
const { Schema } = mongoose;

const courseSchema = new Schema({
  name: { type: String, required: true },
  categories: [{ type: Schema.Types.ObjectId, ref: "Category" }],
  subCategories: [{ type: Schema.Types.ObjectId, ref: "SubCategory" }],
});

const Course = mongoose.model("Course", courseSchema);
module.exports = Course;
