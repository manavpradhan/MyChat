import express from "express";
import protectRoute from "../middleware/protectedRoute.js";
import { getAllUsers } from "../controllers/userController.js";

const router = express.Router();

router.get("/", protectRoute, getAllUsers);

export default router;
