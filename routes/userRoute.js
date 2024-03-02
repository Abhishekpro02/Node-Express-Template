import express from "express";
import { getAllUsers } from "../controllers/userController.js";

const router = express.Router();

// ⁡⁢⁢⁣​‌‍‌⁡⁣⁣⁢𝗚𝗲𝘁 𝗮𝗹𝗹 𝘂𝘀𝗲𝗿𝘀⁡​
router.get("/users", getAllUsers);

export default router;
