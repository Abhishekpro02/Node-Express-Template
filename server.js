import app from "./app.js";
import connectDB from "./config/db.js";

// ​‌‍‌⁡⁣⁣⁢𝗖𝗼𝗻𝗻𝗲𝗰𝘁 𝘁𝗼 𝗱𝗮𝘁𝗮𝗯𝗮𝘀𝗲⁡​
connectDB();

// ​‌‍‌⁡⁣⁣⁢𝟰𝟬𝟰 𝗿𝗼𝘂𝘁𝗲 𝗵𝗮𝗻𝗱𝗹𝗲𝗿⁡​
app.use((req, res) => {
  res.status(404).json({
    status: "error",
    error: `Page Not Found 👺👽👹☠️ Jaldi yahan se hato ☠️👹👽👺`,
  });
});

// ​‌‍‌⁡⁣⁣⁢𝗦𝘁𝗮𝗿𝘁 𝘁𝗵𝗲 𝘀𝗲𝗿𝘃𝗲𝗿⁡​
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT} 👽 `);
});
