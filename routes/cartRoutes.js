const express = require("express");
const router = express.Router();
const {
  addToCart,
  removeFromCart,
  getCartItems,
} = require("../controllers/cartController");

router.post("/add", addToCart);
router.post("/remove", removeFromCart);
router.get("/:userId", getCartItems);

module.exports = router;
