import express from "express";
import asyncHandler from "express-async-handler";
const router = express.Router();
import Wool from "../models/wool.js";

// @des     Fetch all wools
// @route   GET /
// @access  Public
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const wools = await Wool.find({});
    res.send(wools);
  })
);

// @des     Fetch single wool
// @route   GET /wool/:id
// @access  Public
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const wool = await Wool.findById(req.params.id);
    if (wool) {
      res.json(wool);
    } else {
      res.status(404);
      throw new Error("Wool not found");
    }
  })
);

export default router;
