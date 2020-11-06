import express from "express";
import dotenv from "dotenv";
import path from 'path'
import connectDB from "./config/db.js";

import woolRoutes from "./routes/wool.js";
import uploadRoutes from "./routes/upload.js";

import { notFound, errorHandler } from "./middleware/error.js";

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

app.use("/wools", woolRoutes);
app.use("/upload", uploadRoutes);

const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

app.use(notFound);

app.use(errorHandler);

const port = process.env.PORT || 5000;

app.listen(
  port,
  console.log(`Server running in ${process.env.NODE_ENV} on port ${port}`)
);
