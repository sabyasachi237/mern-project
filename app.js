const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
// const cors = require("cors");
const app = express();

// Middlewares
// app.use(express.json());
// app.use(cors());
app.use("/books", router); // localhost:5000/books


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://admin:ssen5271@cluster0.ydiwuj7.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
