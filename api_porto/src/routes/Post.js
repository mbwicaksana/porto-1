import express from "express";
import {
  getPosts,
  createPost,
  deletePost,
  getPostById,
  updatePost,
} from "../controllers/Posts.js";

const router = express.Router();

router.get("/posts", getPosts);
router.get("/posts/:id", getPostById);
router.post("/posts/add", createPost);
router.patch("/posts/edit/:id", updatePost);
router.delete("/posts/delete/:id", deletePost);

export default router;
