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

// @des     Create wool
// @route   POST /wools/
// @access  Public
const createWool = asyncHandler(async (req, res) => {
  const {
    name,
    brand,
    image,
    thickness,
    length,
    weight,
    material,
    color,
    amount,
  } = req.body;
  const wool = new Wool({
    name,
    brand,
    image,
    thickness,
    length,
    weight,
    material,
    color,
    amount,

  });
  const createdWool = await wool.save();
  res.status(201).json(createdWool);
});

// @des     update wool
// @route   PUT /wools/:id
// @access  Public
const updateWool = asyncHandler(async (req, res) => {
  const {
    name,
    brand,
    image,
    thickness,
    length,
    weight,
    material,
    color,
    amount,
  } = req.body;

  const wool = await Wool.findById(req.params.id);
  if (wool) {
    wool.name = name;
    wool.brand = brand;
    wool.image = image;
    wool.thickness = thickness;
    wool.length = length;
    wool.weight = weight;
    wool.material = material;
    wool.color = color;
    wool.amount = amount;
    const updatedWool = await wool.save();
    res.json(updatedWool);
  } else {
    res.status(404);
    throw new Error("Wool not Found");
  }
});

export { getWool, getWools, deleteWool, updateWool, createWool };
