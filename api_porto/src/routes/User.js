import express from "express";
import {
  getUsers,
  getUserById,
  createUser,
  deleteUser,
  updateUser,
} from "../controllers/Users.js";

const router = express.Router();

router.get("/users", getUsers);
router.get("/users/:id", getUserById);
router.post("/users/add", createUser);
router.patch("/users/edit/:id", updateUser);
router.delete("/users/delete/:id", deleteUser);

export default router;
