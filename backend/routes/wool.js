import express from "express";
const router = express.Router();
import {
  getWools,
  getWool,
  deleteWool,
  updateWool,
  createWool,
} from "../controllers/wool.js";

router.route("/").get(getWools).post(createWool);

router.route("/:id").get(getWool).delete(deleteWool).put(updateWool);

export default router;
