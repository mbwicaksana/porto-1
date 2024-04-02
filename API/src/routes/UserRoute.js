import express from "express";
import {
  getUsers,
  getUserById,
  createUser,
  deleteUser,
  updateUser,
  createSession,
  deleteSession,
  getCurrentSession,
} from "../controllers/Users.js";
import { verifyToken } from "../middleware/verifyToken.js";
import { refreshTokenController } from "../controllers/RefreshTokenController.js";

const router = express.Router();

router.get("/users", verifyToken, getUsers);
router.get("/users/:id", getUserById);
router.post("/register", createUser);
router.patch("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);
router.get("/myAccount", getCurrentSession);
router.post("/login", createSession);
router.delete("/logout", deleteSession);
router.get("/token", refreshTokenController);

export default router;
