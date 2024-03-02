export const healthCheck = (req, res) => {
  res.status(200).json({
    status: "ok",
    message: "API is running 🚀🚀",
  });
};
