import Customization from "../models/Customization.js";

export const createCustomization = async (req, res) => {
  try {
    const {
      productType,
      color,
      size,
      material,
      sleeveLength,
      handleColor,
      customText,
      image,
    } = req.body;

    const newCustomization = new Customization({
      productType,
      color,
      size,
      material,
      sleeveLength,
      handleColor,
      customText,
      image,
    });

    const savedCustomization = await newCustomization.save();
    res.status(201).json(savedCustomization);
  } catch (error) {
    console.error("Error creating customization:", error);
    res
      .status(500)
      .json({ message: "Server error while saving customization" });
  }
};
