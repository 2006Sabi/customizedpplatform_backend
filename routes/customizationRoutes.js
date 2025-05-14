import express from "express";
import { createCustomization } from "../controllers/customizationController.js";

const router = express.Router();

router.post("/create", createCustomization);

export default router;
