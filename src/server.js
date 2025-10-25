// .env config
import dotenv from "dotenv";
dotenv.config();

// NPM Packages
import express from "express";
import cors from "cors";
import path from "path";
// Routes
import router from "./routes/index.js";

// Create Server
const app = express();
console.log("Creating Image Server...");

app.use(cors());

// Server Config
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);

const __dirname = path.resolve();
app.use("/images", express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ limit: "50mb" }));
app.use(express.json({ limit: "50mb" }));

// Start Server
app.listen(process.env.PORT, () => {
  console.log(`Server Started on port ${process.env.PORT}`);
});
