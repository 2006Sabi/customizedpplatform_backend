const Cart = require("../models/Cart");

const addToCart = async (req, res) => {
  const { userId, productId, name, image, price } = req.body;

  if (!userId || !productId) {
    return res.status(400).json({ message: "Missing userId or productId" });
  }

  try {
    // Logic to find the cart and add item (MongoDB operations)
    res.status(200).json({ message: "Item added to cart" });
  } catch (error) {
    console.error("Add to cart error:", error);
    res.status(500).json({ message: "Server error" });
  }
};


const removeFromCart = async (req, res) => {
  const { userId, productId } = req.body;
  try {
    const cart = await Cart.findOne({ userId });
    if (!cart) return res.status(404).json({ message: "Cart not found" });
    cart.items = cart.items.filter(item => item.productId !== productId);
    await cart.save();
    res.status(200).json({ message: "Item removed from cart", cart });
  } catch (error) {
    res.status(500).json({ message: "Error removing from cart" });
  }
};

const getCartItems = async (req, res) => {
  const { userId } = req.params;
  try {
    const cart = await Cart.findOne({ userId });
    res.status(200).json(cart ? cart.items : []);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving cart items" });
  }
};

module.exports = { addToCart, removeFromCart, getCartItems };
