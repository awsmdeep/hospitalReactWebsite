import express from "express";
import {
  getAllMessages,
  sendMessage,
} from "../controllers/message.controllers.js";
import { isAdminAuthenticated } from "../middleware/auth.js";

const router = express.Router();

router.post("/send", sendMessage);
router.get("/getall", isAdminAuthenticated, getAllMessages);

export default router;
