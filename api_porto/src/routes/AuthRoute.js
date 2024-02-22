import express from "express";
import {
  createSession,
  deleteSession,
  getCurrentSession,
} from "../controllers/Auth.js";

const router = express.Router();

router.get("/myAccount", getCurrentSession);
router.post("/login", createSession);
router.delete("/logout", deleteSession);

export default router;
