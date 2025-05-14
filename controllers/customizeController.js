const Customize = require("../models/Customize");

const createCustomization = async (req, res) => {
  try {
    const { productType, options, customText } = req.body;
    const imageUrl = req.file ? `/uploads/${req.file.filename}` : null;

    const newOrder = new Customize({
      productType,
      options: JSON.parse(options), // because 'options' is sent as a string
      customText,
      imageUrl,
    });

    await newOrder.save();
    res.status(201).json({ message: "Order placed successfully", newOrder });
  } catch (error) {
    res.status(500).json({ error: "Failed to create customization" });
  }
};

module.exports = { createCustomization };
