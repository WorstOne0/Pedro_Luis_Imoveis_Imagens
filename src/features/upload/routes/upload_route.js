// NPM Packages
import express from "express";
import { verifyToken, multer } from "../../../middlewares/index.js";
// Controller
import uploadController from "../controllers/upload_controller.js";

const router = express.Router();

router.post("/upload/single", verifyToken, multer.single("file"), uploadController.uploadSingle);
router.post("/upload/many", verifyToken, multer.array("files", 10), uploadController.uploadMany);
router.post("/upload/delete", verifyToken, uploadController.delete);

export default router;
