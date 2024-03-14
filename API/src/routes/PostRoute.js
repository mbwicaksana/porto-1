import express from "express";
import {
  getPosts,
  createPost,
  deletePost,
  getPostById,
  updatePost,
} from "../controllers/Posts.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

router.get("/posts", verifyToken, getPosts);
router.get("/posts/:id", verifyToken, getPostById);
router.post("/posts/add", verifyToken, createPost);
router.patch("/posts/edit/:id", verifyToken, updatePost);
router.delete("/posts/delete/:id", verifyToken, deletePost);

export default router;
