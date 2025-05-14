const express = require("express");
const router = express.Router();
const { getUserProfile } = require("../controllers/userController");

// GET user profile by ID
router.get("/:userId", getUserProfile);

module.exports = router;
