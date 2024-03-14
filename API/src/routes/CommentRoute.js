import express from "express";
import {
  createComment,
  deleteComment,
  getCommentById,
  getComments,
  updateComment,
} from "../controllers/Comments.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

router.get("/comments", verifyToken, getComments);
router.get("/comments/:id", verifyToken, getCommentById);
router.post("/comments/add", verifyToken, createComment);
router.patch("/comments/edit/:id", verifyToken, updateComment);
router.delete("/comments/delete/:id", verifyToken, deleteComment);

export default router;
