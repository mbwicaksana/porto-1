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
router.get("/users/:id", verifyToken, getUserById);
router.post("/register", createUser);
router.patch("/users/:id", verifyToken, updateUser);
router.delete("/users/:id", verifyToken, deleteUser);
router.get("/myAccount", verifyToken, getCurrentSession);
router.post("/login", createSession);
router.delete("/logout", verifyToken, deleteSession);
router.get("/token", refreshTokenController);

export default router;
