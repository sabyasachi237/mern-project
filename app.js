const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
// const cors = require("cors");
const app = express();

// Middlewares
// app.use(express.json());
// app.use(cors());
app.use("/books", router); // localhost:5000/books

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://admin:ssen5271@cluster0.ydiwuj7.mongodb.net/?retryWrites=true&w=majority";

moongoose
  .connect(uri, { useNewUrlparser: true, useUnifiedTopology: true })
  .then((data) => {
    console.log("mongoDB connected with server: ${data.connection.host}");
  });
app.listen(5000, () => {
  console.log("server is working on http://localhost:5000");
});
