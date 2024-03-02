import User from "../models/userModel.js";

// ⁡⁢⁢⁣​‌‍‌⁡⁣⁣⁢𝗚𝗲𝘁 𝗮𝗹𝗹 𝘂𝘀𝗲𝗿𝘀⁡​

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json({
      success: true,
      message: "All users fetched successfully",
      users,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      error: error.message,
    });
  }
};
