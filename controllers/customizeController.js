const Customize = require("../models/Customize");
const path = require("path");
const multer = require("multer");

// Set up multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

const createCustomization = async (req, res) => {
  try {
    const {
      productType,
      color,
      size,
      material,
      sleeveLength,
      handleColor,
      customText,
    } = req.body;

    const newCustomization = new Customize({
      productType,
      color,
      size,
      material,
      sleeveLength,
      handleColor,
      customText,
      imageUrl: req.file ? req.file.path : null,
    });

    const saved = await newCustomization.save();
    res.status(201).json(saved);
  } catch (error) {
    console.error("Customize Save Error:", error);
    res.status(500).json({ error: "Failed to save customization" });
  }
};

module.exports = { upload, createCustomization };
