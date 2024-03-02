import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import rateLimit from "express-rate-limit";
import path from "path";
import { healthCheck } from "./controllers/healthController.js";

const app = express();

// ​‌‍‌⁡⁣⁣⁢𝗟𝗼𝗮𝗱 𝗲𝗻𝘃𝗶𝗿𝗼𝗻𝗺𝗲𝗻𝘁 𝘃𝗮𝗿𝗶𝗮𝗯𝗹𝗲𝘀 𝗳𝗿𝗼𝗺 .𝗲𝗻𝘃 𝗳𝗶𝗹𝗲⁡​
dotenv.config();

// ​‌‍‌⁡⁣⁣⁢𝗘𝗻𝗮𝗯𝗹𝗲 𝗖𝗢𝗥𝗦⁡​
app.use(cors());

// ⁡⁢⁢⁣​‌‍‌⁡⁣⁣⁢𝗣𝗮𝗿𝘀𝗲 𝗿𝗲𝗾𝘂𝗲𝘀𝘁 𝗯𝗼𝗱𝘆⁡​⁡
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ​‌‍‌⁡⁣⁣⁢‍𝗛𝗼𝗺𝗲 𝗿𝗼𝘂𝘁𝗲⁡​
app.get("/", (req, res) => {
  res.status(200).json({
    status: "ok",
    message: "API is running 🚀🚀",
  });
});

// ​‌‍‌⁡⁣⁣⁢𝗦𝗲𝗿𝘃𝗲 𝘀𝘁𝗮𝘁𝗶𝗰 𝗳𝗶𝗹𝗲𝘀⁡​
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "public")));

// ​‌‍‌⁡⁣⁣⁢𝗔𝗽𝗶 𝗿𝗮𝘁𝗲 𝗹𝗶𝗺𝗶𝘁𝗲𝗿⁡​
const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // ⁡⁢⁣⁢𝟭𝟬 𝗺𝗶𝗻𝘂𝘁𝗲𝘀⁡
  max: 10, // ⁡⁢⁣⁢𝟭𝟬 𝗿𝗲𝗾𝘂𝗲𝘀𝘁𝘀 𝗽𝗲𝗿 𝘄𝗶𝗻𝗱𝗼𝘄𝗠𝘀⁡
  handler: (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
  },
});

// ​‌‍‌⁡⁢⁣⁢⁡⁣⁣⁢𝗔𝗽𝗽𝗹𝘆 𝘁𝗵𝗲 𝗿𝗮𝘁𝗲 𝗹𝗶𝗺𝗶𝘁𝗲𝗿 𝘁𝗼 𝗮𝗹𝗹 𝗿𝗼𝘂𝘁𝗲𝘀 𝘁𝗵𝗮𝘁 𝘀𝘁𝗮𝗿𝘁 𝘄𝗶𝘁𝗵 /𝗮𝗽𝗶⁡⁡​
app.use("/api", limiter);

// ⁡⁣⁣⁢​‌‍‌Health check route ❤️‍🩹⁡⁡​
app.get("/api/health", healthCheck);

// ​‌‍‌⁡⁣⁣⁡⁣⁣⁢𝗜𝗺𝗽𝗼𝗿𝘁 𝗿𝗼𝘂𝘁𝗲𝘀 🚀🚀⁡⁡​
import userRoute from "./routes/userRoute.js";

// ⁡⁣⁣⁢​‌‍‌𝗨𝘀𝗲 𝗥𝗼𝘂𝘁𝗲𝗿​⁡
app.use("/api/v1", userRoute);

export default app;
