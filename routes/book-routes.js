const express = require("express");

const router = express.Router();
const Book = require("../model/book");

router.post("/", async (req, res, next) => {

  const book = awit.Book.create(req.body);
  res.status(201).json({
    sucess: true,
    book
  });
})
  module.exports = router;
