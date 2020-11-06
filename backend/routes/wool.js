import express from "express";
const router = express.Router();
import { getWools, getWool, deleteWool } from "../controllers/wool.js";

router.route("/").get(getWools);

router.route("/:id").get(getWool).delete(deleteWool);

export default router;
