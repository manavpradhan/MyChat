import express from "express";
import { getAllMessages, sendMessage } from "../controllers/msgController.js";
import protectRoute from "../middleware/protectedRoute.js";

const router = express.Router();

router.get("/:id", protectRoute, getAllMessages);
router.post("/send/:id", protectRoute, sendMessage);

export default router;
