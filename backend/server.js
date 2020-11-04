import express from "express";
import products from "./data/products.js";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

dotenv.config();

connectDB()

const app = express();

app.get("/wools", (req, res) => {
  res.send(products);
});

app.get("/wools/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.send(product);
});

const port = process.env.PORT || 5000;

app.listen(
  port,
  console.log(`Server running in ${process.env.NODE_ENV} on port ${port}`)
);
