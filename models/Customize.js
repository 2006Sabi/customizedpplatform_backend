const mongoose = require("mongoose");

const customizeSchema = new mongoose.Schema({
  productType: String,
  options: {
    color: String,
    size: String,
    material: String,
    sleeveLength: String,
    handleColor: String,
  },
  customText: String,
  imageUrl: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Customize", customizeSchema);
