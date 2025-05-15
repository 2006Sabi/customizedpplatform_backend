const express = require("express");
const router = express.Router();
const {
  upload,
  createCustomization,
} = require("../controllers/customizeController");

router.post("/", upload.single("image"), createCustomization);

module.exports = router;
