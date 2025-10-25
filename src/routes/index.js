import express from "express";
const router = express.Router();

import version from "./version.js";
import uploadRoute from "../features/upload/routes/upload_route.js";
import informationRoute from "../features/information/routes/information_route.js";

// Routes
router.use(version);
router.use(uploadRoute);
router.use(informationRoute);

export default router;
