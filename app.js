const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const categoryRoutes = require("./routes/categoryRoutes");
const subCategoryRoutes = require("./routes/subCategoryRoutes");

const app = express();
app.use(bodyParser.json());

app.use(categoryRoutes);
app.use(subCategoryRoutes);

const PORT = 3000;

mongoose
  .connect(
    "mongodb+srv://ashish8364:Ashish%40143@cluster0.ejesc.mongodb.net/coursesdb?retryWrites=true&w=majority&appName=Cluster0",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() =>
    app.listen(PORT, () => {
      console.log(`running on port ${PORT}`);
    })
  )
  .catch((error) => console.error(error));
