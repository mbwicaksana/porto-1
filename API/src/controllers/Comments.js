import { prisma } from "../config/prisma-client.js";

export const getComments = async (req, res) => {
  try {
    // Check if refresh token is present in cookies
    const refreshToken = req.cookies.refreshToken;

    if (!refreshToken) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    const comments = await prisma.comment.findMany();
    res.json(comments);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching comments" });
  }
};

export const getCommentById = async (req, res) => {
  const { id } = req.params;

  try {
    // Check if refresh token is present in cookies
    const refreshToken = req.cookies.refreshToken;

    if (!refreshToken) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const comment = await prisma.comment.findUnique({
      where: { id: parseInt(id) }, // Ensure numeric ID
    });

    if (!comment) {
      res.status(404).json({ message: "Comment not found" });
      return;
    }

    res.json(comment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching comment" });
  }
};

export const createComment = async (req, res) => {
  const { postId, authorId, name, email, body } = req.body;

  try {
    // Check if refresh token is present in cookies
    const refreshToken = req.cookies.refreshToken;

    if (!refreshToken) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    const comment = await prisma.comment.create({
      data: {
        post: { connect: { id: postId } },
        author: { connect: { id: authorId } },
        name,
        email,
        body,
      },
    });

    res.status(201).json(comment);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Error creating comment" });
  }
};

export const updateComment = async (req, res) => {
  const { id } = req.params;
  const { name, email, body } = req.body;

  try {
    // Check if refresh token is present in cookies
    const refreshToken = req.cookies.refreshToken;

    if (!refreshToken) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const commentId = parseInt(id);
    const comment = await prisma.comment.update({
      where: { id: commentId },
      data: { name, email, body },
    });

    if (!comment) {
      res.status(404).json({ message: "Comment not found" });
      return;
    }

    res.json(comment);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Error updating comment" });
  }
};

export const deleteComment = async (req, res) => {
  const { id } = req.params;

  try {
    // Check if refresh token is present in cookies
    const refreshToken = req.cookies.refreshToken;

    if (!refreshToken) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const comment = await prisma.comment.delete({
      where: { id: parseInt(id) },
    });

    if (!comment) {
      res.status(404).json({ message: "Comment not found" });
      return;
    }

    res.json({ message: "Comment deleted" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error deleting comment" });
  }
};
