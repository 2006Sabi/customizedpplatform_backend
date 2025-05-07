const express = require("express");
const multer = require("multer");
const path = require("path");
const { createCustomization } = require("../controllers/customizeController");

const router = express.Router();

// Image upload configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

router.post("/customize", upload.single("image"), createCustomization);

module.exports = router;
