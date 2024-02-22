import express from "express";
import {
  createComment,
  deleteComment,
  getCommentById,
  getComments,
  updateComment,
} from "../controllers/Comments.js";

const router = express.Router();

router.get("/comments", getComments);
router.get("/comments/:id", getCommentById);
router.post("/comments/add", createComment);
router.patch("/comments/edit/:id", updateComment);
router.delete("/comments/delete/:id", deleteComment);

export default router;
