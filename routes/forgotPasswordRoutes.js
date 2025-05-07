const express = require("express");
const router = express.Router();
const {
  sendPasswordResetLink,
} = require("../controllers/forgotPasswordController");

// POST /api/forgot-password
router.post("/", sendPasswordResetLink);

module.exports = router;
