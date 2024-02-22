import express from "express";
import {
  getPosts,
  createPost,
  deletePost,
  getPostById,
  updatePost,
} from "../controllers/Posts.js";
import { AuthMiddleware } from "../middleware/AuthMiddleware.js";

const router = express.Router();

router.get("/posts", AuthMiddleware, getPosts);
router.get("/posts/:id", AuthMiddleware, getPostById);
router.post("/posts/add", AuthMiddleware, createPost);
router.patch("/posts/edit/:id", AuthMiddleware, updatePost);
router.delete("/posts/delete/:id", AuthMiddleware, deletePost);

export default router;
