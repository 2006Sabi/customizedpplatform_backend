const Customize = require("../models/Customize");

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

    const imageUrl = req.file ? `/uploads/${req.file.filename}` : "";

    const newCustom = new Customize({
      productType,
      color,
      size,
      material,
      sleeveLength,
      handleColor,
      customText,
      imageUrl,
    });

    await newCustom.save();

    res.status(201).json({ message: "Customization saved", order: newCustom });
  } catch (error) {
    res.status(500).json({ error: "Failed to save customization" });
  }
};

module.exports = { createCustomization };
