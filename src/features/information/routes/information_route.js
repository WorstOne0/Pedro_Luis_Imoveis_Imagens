// NPM Packages
import express from "express";
import { verifyToken } from "../../../middlewares/index.js";
// Controller
import informationController from "../controllers/information_controller.js";

const router = express.Router();

router.get("/stats", verifyToken, informationController.getStats);

export default router;
