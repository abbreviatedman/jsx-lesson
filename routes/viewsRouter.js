const express = require('express');

const Book = require("../models/Book");

const router = express.Router();

router.get("/", async (req, res) => {
  res.render("books", { books: await Book.find({}) });
});

router.get("/books", async (req, res) => {
  res.render("books", { books: await Book.find({}) });
});

router.get("/comics", async (req, res) => {
  res.render("comics", { books: await Book.find({}) });
});

router.get("/books/:id", async function (req, res) {
  res.render("book", {book: await Book.findById(req.params.id)})
})

router.get("/about", function (req, res) {
  res.render("about")
})

router.get("/contact", function (req, res) {
  res.render("contact")
})

module.exports = router;
