import mongoose from "mongoose";

const woolSchema = mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  thickness: {
    type: String,
    required: true,
  },
  length: {
    type: Number,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
  material: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  left: {
    type: Number
  },
}, {
  timestamps: true
});

const Wool = mongoose.model("Wool", woolSchema);

export default Wool;
