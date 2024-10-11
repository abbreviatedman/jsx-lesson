const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const path = require('path')
const engine = require('express-react-views')

const viewsRouter = require("./routes/viewsRouter");
const connectToMongoDb = require("./database/connectToMongoDb");

const app = express();

// EJS version:
// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "ejs"));

// JSX version:
app.set("view engine", "jsx");
app.set("views", path.join(__dirname, "views"));
app.engine("jsx", engine.createEngine());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));
app.use(logger("dev"));

app.use("/", viewsRouter);

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
  connectToMongoDb();
});
