const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  productId: String,
  name: String,
  price: Number,
  image: String,
});

const cartSchema = new mongoose.Schema({
  userId: String,
  items: [itemSchema],
});

module.exports = mongoose.model("Cart", cartSchema);
