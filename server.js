const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/db");

const registerRoutes = require("./routes/registerRoutes");
const loginRoutes = require("./routes/loginRoutes");
const forgotPasswordRoutes = require("./routes/forgotPasswordRoutes");
const cartRoutes = require("./routes/cartRoutes");
// const uploadRoutes = require("./routes/uploadRoutes");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Connect DB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Static folder to serve images
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Routes
app.use("/api/register", registerRoutes);
app.use("/api/login", loginRoutes);
app.use("/api/forgot-password", forgotPasswordRoutes);
app.use("/api/cart", cartRoutes);
// app.use("/api/upload", uploadRoutes);

app.get("/", (req, res) => {
  res.send("✅ API is running...");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
