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
// import { AuthMiddleware } from "../middleware/AuthMiddleware.js";

const router = express.Router();

router.get("/users", getUsers);
router.get("/users/:id", getUserById);
router.post("/users", createUser);
router.patch("/users/:id", updateUser);
router.delete("/users/delete/:id", deleteUser);
router.get("/myAccount", getCurrentSession);
router.post("/login", createSession);
router.delete("/logout", deleteSession);

export default router;
