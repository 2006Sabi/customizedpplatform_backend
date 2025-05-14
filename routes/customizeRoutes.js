const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const { createCustomization } = require("../controllers/customizeController");

// Image upload setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`),
});
const upload = multer({ storage });

// POST route
router.post("/customize", upload.single("image"), createCustomization);

module.exports = router;
