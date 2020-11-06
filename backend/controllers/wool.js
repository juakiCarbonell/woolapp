import asyncHandler from "express-async-handler";
import Wool from "../models/wool.js";

// @des     Fetch all wools
// @route   GET /
// @access  Public
const getWools = asyncHandler(async (req, res) => {
  const wools = await Wool.find({});
  res.send(wools);
});

// @des     Fetch single wool
// @route   GET /wool/:id
// @access  Public
const getWool = asyncHandler(async (req, res) => {
  const wool = await Wool.findById(req.params.id);
  if (wool) {
    res.json(wool);
  } else {
    res.status(404);
    throw new Error("Wool not found");
  }
});

// @des     Delete wool
// @route   DELETE /wool/:id
// @access  Public
const deleteWool = asyncHandler(async (req, res) => {
  const wool = await Wool.findById(req.params.id);
  if (wool) {
    await wool.remove();
    res.json({ message: "Wool Removed" });
  } else {
    res.status(404);
    throw new Error("Wool not found");
  }
});

export { getWool, getWools, deleteWool };
